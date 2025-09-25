from __future__ import annotations

import time
from collections import deque
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Deque, Dict, Iterable, List, Optional, Tuple, Union


class NoAvailableKeyError(Exception):
    """Raised when no key is currently available."""

    def __init__(self, wait_time: float) -> None:
        super().__init__(wait_time)
        self.wait_time = wait_time


@dataclass
class KeyState:
    key: str
    weight: float = 1.0
    minute_limit: int = 60
    daily_limit: Optional[int] = None
    ema_alpha: float = 0.25
    success_count: int = 0
    error_count: int = 0
    consecutive_errors: int = 0
    cooldown_until: float = 0.0
    last_latency: Optional[float] = None
    avg_latency: Optional[float] = None
    last_used: float = 0.0
    health: str = "healthy"
    health_reason: str = ""
    request_log: Deque[float] = field(default_factory=deque)
    total_requests: int = 0
    daily_count: int = 0
    last_reset_date: str = field(default_factory=lambda: datetime.utcnow().date().isoformat())

    def register_attempt(self, ts: float) -> None:
        self._ensure_daily_window(ts)
        self.total_requests += 1
        if self.daily_limit:
            self.daily_count += 1
        self.last_used = ts
        self.request_log.append(ts)
        self._prune_request_log(ts)

    def _prune_request_log(self, now: float) -> None:
        window = 60.0
        while self.request_log and now - self.request_log[0] > window:
            self.request_log.popleft()

    def time_until_available(self, now: float) -> float:
        wait = max(0.0, self.cooldown_until - now)
        self._prune_request_log(now)
        if self.minute_limit > 0 and len(self.request_log) >= self.minute_limit:
            rate_wait = max(0.0, 60.0 - (now - self.request_log[0]))
            wait = max(wait, rate_wait)
        if self.daily_limit:
            self._ensure_daily_window(now)
            if self.daily_count >= self.daily_limit:
                wait = max(wait, self._seconds_until_next_day(now))
        return wait

    def success_rate(self) -> float:
        total = self.success_count + self.error_count
        if total == 0:
            return 1.0
        return self.success_count / total

    def update_success(self, latency: float) -> None:
        self.success_count += 1
        self.consecutive_errors = 0
        self.last_latency = latency
        if self.avg_latency is None:
            self.avg_latency = latency
        else:
            self.avg_latency = self.avg_latency * (1 - self.ema_alpha) + latency * self.ema_alpha
        self.health = "healthy"
        self.health_reason = ""
        self.cooldown_until = 0.0

    def update_failure(self, cooldown_until: float, health: str, reason: str) -> None:
        self.error_count += 1
        self.consecutive_errors += 1
        self.cooldown_until = max(self.cooldown_until, cooldown_until)
        self.health = health
        self.health_reason = reason

    # ------------------------------------------------------------------
    def _ensure_daily_window(self, ts: float) -> None:
        if not self.daily_limit:
            return
        current = datetime.utcfromtimestamp(ts).date().isoformat()
        if current != self.last_reset_date:
            self.daily_count = 0
            self.last_reset_date = current

    def _seconds_until_next_day(self, ts: float) -> float:
        moment = datetime.utcfromtimestamp(ts)
        next_midnight = (moment + timedelta(days=1)).replace(hour=0, minute=0, second=0, microsecond=0)
        return max(1.0, (next_midnight - moment).total_seconds())

    def score(self, now: float, base_latency: float) -> float:
        latency_penalty = 1.0
        if self.avg_latency:
            latency_penalty += max(0.0, self.avg_latency - base_latency) / max(base_latency, 0.1)

        error_penalty = 1 + self.consecutive_errors
        rate_penalty = 1.0
        if self.minute_limit > 0:
            utilisation = len(self.request_log) / float(self.minute_limit)
            rate_penalty += utilisation * 0.5
        if self.daily_limit:
            day_utilisation = self.daily_count / float(self.daily_limit)
            rate_penalty += day_utilisation * 0.5

        health_factor = {
            "healthy": 1.0,
            "warm": 0.9,
            "degraded": 0.6,
            "rate_limited": 0.3,
            "cooldown": 0.2,
            "blocked": 0.05,
        }.get(self.health, 0.8)

        freshness = 1.0 / (1.0 + max(0.0, now - self.last_used))

        base = self.weight * health_factor * (0.5 + 0.5 * self.success_rate())
        return base * (1 + freshness) / (latency_penalty * error_penalty * rate_penalty)


class KeyLoadBalancer:
    def __init__(
        self,
        keys: Iterable[Union[str, Dict[str, Union[str, float, int, None]], 'KeyState']],
        *,
        minute_limit: int = 60,
        base_weight: float = 1.0,
        cooldown_seconds: float = 10.0,
        rate_limit_cooldown: float = 45.0,
        hard_block_seconds: float = 900.0,
        max_cooldown: float = 180.0,
        sleep_cap: float = 12.0,
        base_latency: float = 1.5,
    ) -> None:
        self.states: List[KeyState] = []
        for raw in keys:
            value: Optional[str] = None
            weight = base_weight
            minute_cap = minute_limit
            daily_cap: Optional[int] = None

            if isinstance(raw, KeyState):
                self.states.append(raw)
                continue

            if isinstance(raw, str):
                value = raw.strip()
            elif isinstance(raw, dict):
                raw_value = raw.get("value")  # type: ignore[arg-type]
                if isinstance(raw_value, str):
                    value = raw_value.strip()
                weight = float(raw.get("weight", base_weight))  # type: ignore[arg-type]
                minute_raw = raw.get("minute_limit")  # type: ignore[arg-type]
                if minute_raw is not None:
                    minute_cap = int(minute_raw)
                daily_raw = raw.get("daily_limit")  # type: ignore[arg-type]
                if daily_raw is not None:
                    daily_cap = int(daily_raw)
            elif hasattr(raw, "value"):
                value = str(getattr(raw, "value")).strip()
                weight = float(getattr(raw, "weight", base_weight))
                minute_raw = getattr(raw, "minute_limit", None)
                if minute_raw is not None:
                    minute_cap = int(minute_raw)
                daily_raw = getattr(raw, "daily_limit", None)
                if daily_raw is not None:
                    daily_cap = int(daily_raw)

            if not value:
                continue

            self.states.append(
                KeyState(
                    key=value,
                    weight=weight,
                    minute_limit=minute_cap or minute_limit,
                    daily_limit=daily_cap,
                )
            )
        if not self.states:
            raise ValueError("No valid API keys provided")
        self.cooldown_seconds = cooldown_seconds
        self.rate_limit_cooldown = rate_limit_cooldown
        self.hard_block_seconds = hard_block_seconds
        self.max_cooldown = max_cooldown
        self.sleep_cap = sleep_cap
        self.base_latency = base_latency
        self.active_index: Optional[int] = None
        self.total_attempts = 0
        self.total_success = 0
        self.total_errors = 0

    def _choose(
        self,
        now: Optional[float] = None,
        *,
        mark_attempt: bool = True,
    ) -> Tuple[Optional[int], Optional[KeyState], Optional[float]]:
        now = now or time.time()
        best_idx: Optional[int] = None
        best_score = float("-inf")
        best_state: Optional[KeyState] = None
        next_ready: Optional[float] = None

        for idx, state in enumerate(self.states):
            wait = state.time_until_available(now)
            if wait <= 0:
                score = state.score(now, self.base_latency)
                if score > best_score:
                    best_score = score
                    best_idx = idx
                    best_state = state
            else:
                if next_ready is None or wait < next_ready:
                    next_ready = wait

        if best_idx is not None and best_state is not None:
            if mark_attempt:
                best_state.register_attempt(now)
                self.total_attempts += 1
            self.active_index = best_idx
            return best_idx, best_state, 0.0

        return None, None, next_ready

    def acquire(self) -> Tuple[int, KeyState]:
        idx, state, wait = self._choose()
        if idx is None or state is None:
            raise NoAvailableKeyError(float(wait or 0.0))
        return idx, state

    def wait_time_until_next(self) -> float:
        now = time.time()
        waits = [state.time_until_available(now) for state in self.states]
        waits = [w for w in waits if w > 0]
        if not waits:
            return 1.0
        wait = min(waits)
        return min(self.sleep_cap, max(1.0, wait))

    def record_success(self, index: int, latency: float) -> None:
        self.states[index].update_success(latency)
        self.total_success += 1

    def record_failure(
        self,
        index: int,
        *,
        status_code: Optional[int] = None,
        retry_after: Optional[float] = None,
        exception: Optional[Exception] = None,
    ) -> None:
        now = time.time()
        state = self.states[index]
        escalation = min(self.max_cooldown, self.cooldown_seconds * max(1, state.consecutive_errors + 1))
        cooldown = now + escalation
        reason = ""
        health = "degraded"

        if status_code in (401, 403):
            cooldown = now + max(escalation, self.hard_block_seconds)
            health = "blocked"
            reason = f"HTTP {status_code}"
        elif status_code == 429:
            cooldown = now + max(escalation, self.rate_limit_cooldown)
            health = "rate_limited"
            reason = "HTTP 429"
        elif status_code and status_code >= 500:
            health = "degraded"
            reason = f"HTTP {status_code}"
        elif status_code:
            reason = f"HTTP {status_code}"
        elif exception is not None:
            reason = str(exception)

        if retry_after is not None:
            cooldown = now + max(retry_after, cooldown - now)

        state.update_failure(cooldown, health, reason)
        self.total_errors += 1

    def penalise_active(self, seconds: Optional[float] = None, reason: str = "manual switch") -> Optional[int]:
        if self.active_index is None:
            return None
        now = time.time()
        state = self.states[self.active_index]
        state.cooldown_until = max(state.cooldown_until, now + (seconds or self.cooldown_seconds))
        state.health = "cooldown"
        state.health_reason = reason
        self.active_index = None
        idx, state, _ = self._choose(mark_attempt=False)
        if idx is not None:
            self.active_index = idx
        return self.active_index

    def stats_snapshot(self) -> List[Dict[str, object]]:
        now = time.time()
        rows: List[Dict[str, object]] = []
        for idx, state in enumerate(self.states):
            wait = state.time_until_available(now)
            rows.append(
                {
                    "index": idx,
                    "key": self.mask_key(state.key),
                    "health": state.health,
                    "reason": state.health_reason,
                    "weight": round(state.weight, 3),
                    "success": state.success_count,
                    "error": state.error_count,
                    "consecutive_errors": state.consecutive_errors,
                    "avg_latency": round(state.avg_latency, 3) if state.avg_latency else None,
                    "last_latency": round(state.last_latency, 3) if state.last_latency else None,
                    "minute_usage": len(state.request_log),
                    "minute_limit": state.minute_limit,
                    "daily_usage": state.daily_count if state.daily_limit is not None else None,
                    "daily_limit": state.daily_limit,
                    "ready_in": round(wait, 2),
                    "score": round(state.score(now, self.base_latency), 4),
                }
            )
        rows.sort(key=lambda item: item["score"], reverse=True)
        return rows

    def summary(self) -> Dict[str, object]:
        return {
            "keys": len(self.states),
            "attempts": self.total_attempts,
            "success": self.total_success,
            "errors": self.total_errors,
        }

    @staticmethod
    def mask_key(key: str) -> str:
        key = key.strip()
        if len(key) <= 8:
            return key
        return f"{key[:4]}…{key[-4:]}"
