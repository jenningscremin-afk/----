from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Tuple


@dataclass
class RetryBackoff:
    base: float = 2.0
    cap: float = 10.0


@dataclass
class KeyConfig:
    value: str
    weight: float = 1.0
    minute_limit: Optional[int] = None
    daily_limit: Optional[int] = None


@dataclass
class GroupConfig:
    name: str
    provider: str
    model: str
    base_url: str
    request_timeout: float
    max_retries: int
    retry_backoff: RetryBackoff
    cooldown_seconds: float
    rate_limit_cooldown: float
    hard_block_seconds: float
    per_key_minute_limit: int
    per_key_daily_limit: Optional[int]
    base_latency: float
    max_output_tokens: int
    temperature: float
    top_k: int
    top_p: float
    keys: List[KeyConfig]


@dataclass
class SystemConfig:
    request_timeout: float = 30.0
    max_retries: int = 6
    retry_backoff: RetryBackoff = field(default_factory=RetryBackoff)
    cooldown_seconds: float = 8.0
    rate_limit_cooldown: float = 60.0
    hard_block_seconds: float = 900.0
    per_key_minute_limit: int = 90
    per_key_daily_limit: Optional[int] = None
    base_latency: float = 1.2
    max_output_tokens: int = 2048
    temperature: float = 0.7
    top_k: int = 40
    top_p: float = 0.95
    default_group: Optional[str] = None


def load_config(path: str) -> Tuple[SystemConfig, Dict[str, GroupConfig]]:
    config_path = Path(path)
    if not config_path.exists():
        raise FileNotFoundError(f"Config file not found: {path}")

    data = json.loads(config_path.read_text(encoding='utf-8'))

    system_raw = data.get('system', {})
    system = SystemConfig(
        request_timeout=float(system_raw.get('request_timeout', 30.0)),
        max_retries=int(system_raw.get('max_retries', 6)),
        retry_backoff=_retry_backoff(system_raw.get('retry_backoff', {})),
        cooldown_seconds=float(system_raw.get('cooldown_seconds', 8.0)),
        rate_limit_cooldown=float(system_raw.get('rate_limit_cooldown', 60.0)),
        hard_block_seconds=float(system_raw.get('hard_block_seconds', 900.0)),
        per_key_minute_limit=int(system_raw.get('per_key_minute_limit', 90)),
        per_key_daily_limit=_optional_int(system_raw.get('per_key_daily_limit')),
        base_latency=float(system_raw.get('base_latency', 1.2)),
        max_output_tokens=int(system_raw.get('max_output_tokens', 2048)),
        temperature=float(system_raw.get('temperature', 0.7)),
        top_k=int(system_raw.get('topK', system_raw.get('top_k', 40))),
        top_p=float(system_raw.get('topP', system_raw.get('top_p', 0.95))),
        default_group=system_raw.get('default_group'),
    )

    groups_data = data.get('groups', [])
    if not isinstance(groups_data, list) or not groups_data:
        raise ValueError('Config file must define at least one group in "groups" array')

    groups: Dict[str, GroupConfig] = {}
    for raw_group in groups_data:
        if not isinstance(raw_group, dict):
            continue
        name = raw_group.get('name')
        if not name:
            raise ValueError('Group definition missing "name" field')

        group = GroupConfig(
            name=name,
            provider=raw_group.get('provider', 'gemini'),
            model=raw_group.get('model', 'gemini-1.5-flash'),
            base_url=raw_group.get('base_url', ''),
            request_timeout=float(raw_group.get('request_timeout', system.request_timeout)),
            max_retries=int(raw_group.get('max_retries', system.max_retries)),
            retry_backoff=_retry_backoff(raw_group.get('retry_backoff', {}), system.retry_backoff),
            cooldown_seconds=float(raw_group.get('cooldown_seconds', system.cooldown_seconds)),
            rate_limit_cooldown=float(raw_group.get('rate_limit_cooldown', system.rate_limit_cooldown)),
            hard_block_seconds=float(raw_group.get('hard_block_seconds', system.hard_block_seconds)),
            per_key_minute_limit=int(raw_group.get('per_key_minute_limit', system.per_key_minute_limit)),
            per_key_daily_limit=_optional_int(raw_group.get('per_key_daily_limit', system.per_key_daily_limit)),
            base_latency=float(raw_group.get('base_latency', system.base_latency)),
            max_output_tokens=int(raw_group.get('max_output_tokens', system.max_output_tokens)),
            temperature=float(raw_group.get('temperature', system.temperature)),
            top_k=int(raw_group.get('topK', raw_group.get('top_k', system.top_k))),
            top_p=float(raw_group.get('topP', raw_group.get('top_p', system.top_p))),
            keys=_resolve_keys(
                raw_group.get('keys', []),
                config_path.parent,
                default_weight=1.0,
                default_minute_limit=raw_group.get('per_key_minute_limit', system.per_key_minute_limit),
                default_daily_limit=raw_group.get('per_key_daily_limit', system.per_key_daily_limit),
            ),
        )

        if not group.base_url:
            raise ValueError(f"Group '{name}' missing 'base_url' configuration")
        if not group.keys:
            raise ValueError(f"Group '{name}' has no API keys configured")

        groups[group.name] = group

    return system, groups


def _retry_backoff(data: Dict[str, float], fallback: Optional[RetryBackoff] = None) -> RetryBackoff:
    if not isinstance(data, dict):
        data = {}
    if fallback is None:
        fallback = RetryBackoff()
    return RetryBackoff(
        base=float(data.get('base', fallback.base)),
        cap=float(data.get('cap', fallback.cap)),
    )


def _optional_int(value) -> Optional[int]:  # type: ignore[override]
    if value is None or value == "" or value == "null":
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _resolve_keys(
    entries: Iterable,
    base_dir: Path,
    *,
    default_weight: float,
    default_minute_limit,
    default_daily_limit,
) -> List[KeyConfig]:
    result: List[KeyConfig] = []
    for entry in entries:
        weight = default_weight
        minute_limit = _optional_int(entry.get('minute_limit') if isinstance(entry, dict) else None)
        daily_limit = _optional_int(entry.get('daily_limit') if isinstance(entry, dict) else None)

        if minute_limit is None and default_minute_limit is not None:
            minute_limit = int(default_minute_limit)
        if daily_limit is None and default_daily_limit is not None:
            daily_limit = int(default_daily_limit)

        if isinstance(entry, str):
            value = entry.strip()
            if value:
                result.append(KeyConfig(value=value, weight=weight, minute_limit=minute_limit, daily_limit=daily_limit))
            continue

        if isinstance(entry, dict):
            if 'weight' in entry:
                try:
                    weight = float(entry['weight'])
                except (TypeError, ValueError):
                    weight = default_weight

            if 'value' in entry:
                value = str(entry['value']).strip()
                if value:
                    result.append(KeyConfig(value=value, weight=weight, minute_limit=minute_limit, daily_limit=daily_limit))
                continue

            if 'file' in entry:
                file_path = base_dir / str(entry['file'])
                content = file_path.read_text(encoding='utf-8')
                for line in content.splitlines():
                    stripped = line.strip()
                    if stripped and not stripped.startswith('#'):
                        result.append(KeyConfig(value=stripped, weight=weight, minute_limit=minute_limit, daily_limit=daily_limit))
                continue

        if hasattr(entry, 'value'):
            value = str(getattr(entry, 'value')).strip()
            if value:
                weight = float(getattr(entry, 'weight', weight))
                minute_attr = getattr(entry, 'minute_limit', minute_limit)
                daily_attr = getattr(entry, 'daily_limit', daily_limit)
                result.append(KeyConfig(value=value, weight=weight, minute_limit=minute_attr, daily_limit=daily_attr))

    return result
