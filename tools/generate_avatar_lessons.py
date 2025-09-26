#!/usr/bin/env python3
"""Generate virtual avatar lesson HTML files from the production blueprint.

This script reads the markdown blueprint located at
``教案讲稿/高等应用数学视频课程生产蓝图.md`` and converts every
lesson from Chapter 3 onwards into a self-contained HTML file that follows the
virtual-avatar template provided by the production team.

Usage:
    python tools/generate_avatar_lessons.py

The generated files are placed under ``录屏课件``. An index page linking to all
lessons is also produced for quick navigation.
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List

ROOT = Path(__file__).resolve().parent.parent
BLUEPRINT = ROOT / "教案讲稿" / "高等应用数学视频课程生产蓝图.md"
OUTPUT_DIR = ROOT / "录屏课件"


@dataclass
class Slide:
    index: int
    total: int
    title: str
    duration_seconds: int
    board: str
    animation: str
    narration_text: str
    action: str


@dataclass
class Lesson:
    chapter: int
    number: int
    title: str
    total_time: str
    slides: List[Slide]

    @property
    def filename(self) -> str:
        return f"ch{self.chapter:02d}_v{self.number:02d}.html"

    @property
    def display_name(self) -> str:
        return f"第{self.chapter}章 视频 {self.chapter}.{self.number} {self.title}"


def read_blueprint() -> str:
    if not BLUEPRINT.exists():
        raise FileNotFoundError(f"Blueprint not found: {BLUEPRINT}")
    return BLUEPRINT.read_text(encoding="utf-8")


LESSON_PATTERN = re.compile(
    r"### 视频 (\d+)\.(\d+): (.+?)\n\n\*\*预计总时长\*\* : 约 ([^\n]+)\n\n"  # header
    r"(?P<body>(?:.|\n)+?)(?=\n### 视频 |\Z)",
    re.MULTILINE,
)

SLIDE_PATTERN = re.compile(
    r"#### 页面 (\d+)/(\d+) - (.+?) \((\d+)秒\)\s*\n+"
    r"\*\*板书内容\*\*\s*\n+"
    r"(?P<board>(?:.|\n)+?)\n+\*\*动画脚本\*\*\s*\n+"
    r"(?P<animation>(?:.|\n)+?)\n+\*\*虚拟人讲稿\*\*\s*\n+"
    r"(?P<narration>(?:.|\n)+?)(?=\n#### 页面 |\n### 视频 |\Z)",
    re.MULTILINE,
)


def parse_lessons(blueprint_text: str) -> List[Lesson]:
    lessons: List[Lesson] = []
    for match in LESSON_PATTERN.finditer(blueprint_text):
        chapter = int(match.group(1))
        number = int(match.group(2))
        if chapter < 3:
            continue
        title = match.group(3).strip()
        total_time = match.group(4).strip()
        body = match.group("body")
        slides = list(parse_slides(body))
        if not slides:
            continue
        lessons.append(Lesson(chapter, number, title, total_time, slides))
    return lessons


def parse_slides(body: str) -> Iterable[Slide]:
    for slide_match in SLIDE_PATTERN.finditer(body):
        index = int(slide_match.group(1))
        total = int(slide_match.group(2))
        title = slide_match.group(3).strip()
        duration = int(slide_match.group(4))
        board = slide_match.group("board").strip()
        animation = slide_match.group("animation").strip()
        narration_raw = slide_match.group("narration").strip()

        action, narration_text = extract_action_and_text(narration_raw)

        yield Slide(
            index=index,
            total=total,
            title=title,
            duration_seconds=duration,
            board=board,
            animation=animation,
            narration_text=narration_text,
            action=action,
        )


ACTION_PATTERN = re.compile(r"^\(动作:\s*([^\)]+)\)\s*(.*)$", re.DOTALL)


def extract_action_and_text(raw: str) -> tuple[str, str]:
    raw = raw.strip()
    action = "A_U_No_pointing_O"
    text = raw
    match = ACTION_PATTERN.match(raw)
    if match:
        action = match.group(1).strip()
        text = match.group(2).strip()
    text = text.strip('"')
    return action, text


def format_text_block(text: str) -> str:
    lines = [line.rstrip() for line in text.splitlines()]
    html_parts: List[str] = []
    buffer: List[str] = []
    list_items: List[str] = []
    list_type: str | None = None

    def flush_paragraph():
        nonlocal buffer
        if buffer:
            joined = " ".join(buffer).strip()
            if joined:
                html_parts.append(f"<p>{convert_inline(joined)}</p>")
            buffer = []

    def flush_list():
        nonlocal list_items, list_type
        if list_items and list_type:
            tag = "ul" if list_type == "ul" else "ol"
            html_items = "".join(f"<li>{item}</li>" for item in list_items)
            html_parts.append(f"<{tag}>{html_items}</{tag}>")
        list_items = []
        list_type = None

    for line in lines:
        stripped = line.strip()
        if not stripped:
            flush_paragraph()
            flush_list()
            continue
        unordered = re.match(r"^[\*-]\s+(.*)$", stripped)
        ordered = re.match(r"^(\d+)\.\s+(.*)$", stripped)
        if unordered:
            flush_paragraph()
            item = convert_inline(unordered.group(1).strip())
            if list_type not in {None, "ul"}:
                flush_list()
            list_type = "ul"
            list_items.append(item)
        elif ordered:
            flush_paragraph()
            item = convert_inline(ordered.group(2).strip())
            if list_type not in {None, "ol"}:
                flush_list()
            list_type = "ol"
            list_items.append(item)
        else:
            flush_list()
            buffer.append(stripped)

    flush_paragraph()
    flush_list()
    return "\n".join(html_parts)


def convert_inline(text: str) -> str:
    import html

    escaped = html.escape(text, quote=False)
    escaped = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"`(.+?)`", r"<code>\1</code>", escaped)
    return escaped.replace("\n", "<br>")


def render_animation_block(text: str) -> str:
    # Prefer ordered list if entries are enumerated; otherwise paragraphs.
    lines = [line.rstrip() for line in text.splitlines() if line.strip()]
    if not lines:
        return ""
    if all(re.match(r"^\d+\.\s+", line.strip()) for line in lines):
        items = []
        for line in lines:
            content = re.sub(r"^\d+\.\s+", "", line.strip())
            items.append(f"<li>{convert_inline(content)}</li>")
        return "<ol>" + "".join(items) + "</ol>"
    return format_text_block(text)


def narration_to_script_text(text: str) -> str:
    # Collapse whitespace but keep math symbols.
    collapsed = re.sub(r"\s+", " ", text).strip()
    return collapsed


HTML_TEMPLATE = """<!DOCTYPE html>
<html lang=\"zh-CN\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>{full_title}</title>
    <script src=\"https://cdn.tailwindcss.com\"></script>
    <link rel=\"stylesheet\" href=\"./assets/noto-serif-sc.css\">
    <script>
        window.MathJax = {{
            tex: {{
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']],
                processEscapes: true,
                processEnvironments: true
            }},
            options: {{
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                ignoreHtmlClass: 'tex2jax_ignore',
                processHtmlClass: 'tex2jax_process'
            }},
            startup: {{
                ready: () => {{
                    console.log('✅ MathJax已加载并配置完成');
                    MathJax.startup.defaultReady();
                }}
            }}
        }};
    </script>
    <script src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>
    <script id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>
    <link rel=\"stylesheet\" href=\"./assets/lesson-template.css\">
</head>
<body class=\"blackboard\">
    <div id=\"statusIndicator\" class=\"status-indicator\">等待连接</div>
    <header class=\"lesson-topbar\">
        <div class=\"lesson-meta\">
            <h1>{lesson_title}</h1>
            <div class=\"lesson-meta__row\">
                <span class=\"lesson-chip\">章节 {chapter_number}</span>
                <span class=\"lesson-chip\">预计总时长：{total_time}</span>
                <span class=\"lesson-chip\">共 {total_slides} 页</span>
            </div>
            <p class=\"lesson-subtitle\">虚拟人录屏课件模板 · 自动生成的板书、动画、讲稿三栏脚本</p>
        </div>
        <div class=\"lesson-timeline\">
{timeline_items}
        </div>
    </header>
    <div class=\"avatar-container\">
        <div class=\"wrapper\" id=\"avatarWrapper\"></div>
    </div>
    <div id=\"slide-container\" class=\"slide-container flex-grow\">
{slides}
    </div>
    <div class=\"subtitle-area\" id=\"subtitleArea\">欢迎学习{lesson_title}！点击开始讲课启动虚拟人讲师。</div>
    <div class=\"control-bar\">
        <div class=\"control-title\">第 <span id=\"currentSlide\">1</span> 页 / 共 <span id=\"totalSlides\">{total_slides}</span> 页</div>
        <button class=\"btn\" onclick=\"previousSlide()\">⬅️ 上一页</button>
        <button class=\"btn primary\" onclick=\"startTeaching()\" id=\"startBtn\">🎀 开始讲课</button>
        <button class=\"btn\" onclick=\"nextSlide()\">下一页 ➡️</button>
        <button class=\"btn\" onclick=\"restart()\">🔄 重新开始</button>
        <button class=\"btn autoplay\" onclick=\"startAutoPlay()\" id=\"autoPlayBtn\">🎬 自动播放</button>
        <div class=\"control-hint\">💡 录制提示：点击自动播放后立即开始录屏，系统会自动完成全部演示。</div>
        <div class=\"control-shortcuts\">💡 快捷键：空格/→ 下一页，← 上一页，Enter 播放当前页</div>
    </div>
    <script type=\"module\">
        try {{
            const {{ default: AvatarPlatform, SDKEvents, PlayerEvents, RecorderEvents, UserMedia }} = await import('./avatar-sdk-web_3.1.2.1002/index.js');
            window.AvatarPlatform = AvatarPlatform;
            window.SDKEvents = SDKEvents;
            window.PlayerEvents = PlayerEvents;
            window.RecorderEvents = RecorderEvents;
            window.UserMedia = UserMedia;
            console.log('✅ 讯飞官方SDK模块已加载');
            console.log('SDK版本:', AvatarPlatform.getVersion());
        }} catch (error) {{
            console.error('❌ SDK模块加载失败:', error);
        }}
        window.dispatchEvent(new CustomEvent('sdkReady'));
    </script>
    <script>
        const lessonTitle = {json_lesson_title};
        const subtitleScript = {subtitle_json};
        const actionMap = {action_json};
        const slideTitles = {titles_json};
        const slideDurations = {durations_json};
        const totalSlides = {total_slides};

        let avatarPlatform = null;
        let isConnected = false;
        let isTeaching = false;
        let currentSlide = 0;
        let isAutoPlaying = false;

        const slides = document.querySelectorAll('.slide');
        const timelineItems = document.querySelectorAll('.timeline-item');

        function showSlide(index) {{
            slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
            currentSlide = index;
            document.getElementById('currentSlide').textContent = index + 1;
            if (window.MathJax && window.MathJax.typesetPromise) {{
                window.MathJax.typesetPromise([slides[index]]).catch(err => console.error(err));
            }}
            timelineItems.forEach((item, i) => item.classList.toggle('active', i === index));
        }}

        function nextSlide() {{
            if (currentSlide < totalSlides - 1) {{
                showSlide(currentSlide + 1);
                if (!isAutoPlaying) speakContent(currentSlide + 1);
            }}
        }}

        function previousSlide() {{
            if (currentSlide > 0) {{
                showSlide(currentSlide - 1);
                if (!isAutoPlaying) speakContent(currentSlide + 1);
            }}
        }}

        function restart() {{
            showSlide(0);
            if (!isAutoPlaying) speakContent(1);
        }}

        function updateSubtitle(text) {{
            const area = document.getElementById('subtitleArea');
            if (area) {{
                area.textContent = text;
            }}
        }}

        function updateStatus(message, type = 'normal') {{
            const indicator = document.getElementById('statusIndicator');
            if (!indicator) return;
            indicator.textContent = message;
            indicator.className = 'status-indicator';
            if (type === 'connected') indicator.classList.add('connected');
            if (type === 'error') indicator.classList.add('error');
            if (type === 'connecting') indicator.classList.add('connecting');
            if (type === 'recording') indicator.classList.add('recording');
        }}

        function waitForSDK() {{
            return new Promise((resolve, reject) => {{
                if (typeof AvatarPlatform !== 'undefined') {{
                    resolve();
                    return;
                }}
                const timeout = setTimeout(() => {{
                    reject(new Error('SDK加载超时，请刷新页面重试'));
                }}, 10000);
                window.addEventListener('sdkReady', function handler() {{
                    clearTimeout(timeout);
                    window.removeEventListener('sdkReady', handler);
                    resolve();
                }});
            }});
        }}

        async function startTeaching() {{
            const startBtn = document.getElementById('startBtn');
            startBtn.textContent = '🔄 启动中...';
            startBtn.disabled = true;
            try {{
                updateStatus('等待SDK加载...', 'connecting');
                await waitForSDK();
                if (avatarPlatform) {{
                    avatarPlatform.destroy();
                }}
                avatarPlatform = new AvatarPlatform({{ useInlinePlayer: true }});
                avatarPlatform
                    .on('connected', () => {{
                        isConnected = true;
                        isTeaching = true;
                        updateStatus('已连接', 'connected');
                        startBtn.textContent = '💖 虚拟人已就绪';
                        setTimeout(() => speakContent(currentSlide + 1), 500);
                    }})
                    .on('disconnected', () => {{
                        isConnected = false;
                        isTeaching = false;
                        updateStatus('连接断开', 'error');
                        startBtn.textContent = '重新连接';
                        startBtn.disabled = false;
                    }})
                    .on('error', (error) => {{
                        console.error('❌ 虚拟人错误:', error);
                        updateStatus('错误: ' + error.message, 'error');
                        startBtn.textContent = '连接失败';
                        startBtn.disabled = false;
                    }});

                avatarPlatform.setApiInfo({{
                    appId: 'b4889d02',
                    apiKey: 'de174061f9ffd1f4e7f1827aa98881be',
                    apiSecret: 'NWMyZThkMWVkMDZmYThlOTA5ZGE2NjM2',
                    sceneId: '213607046975721472',
                    serverUrl: 'wss://avatar.cn-huadong-1.xf-yun.com/v1/interact'
                }});

                avatarPlatform.setGlobalParams({{
                    stream: {{ protocol: 'xrtc', alpha: 1, bitrate: 1000000, fps: 25 }},
                    avatar: {{ avatar_id: '110332017', width: 1920, height: 1080, scale: 1, move_h: 0, move_v: 0, audio_format: 1 }},
                    tts: {{ vcn: 'x4_yiting', speed: 50, pitch: 50, volume: 100 }},
                    avatar_dispatch: {{ interactive_mode: 1, content_analysis: 0 }}
                }});

                await avatarPlatform.start({{ wrapper: document.getElementById('avatarWrapper') }});
            }} catch (error) {{
                console.error('❌ 启动失败:', error);
                updateStatus('启动失败', 'error');
                startBtn.textContent = '🔄 重试';
                startBtn.disabled = false;
                alert('启动失败: ' + error.message);
            }}
        }}

        async function speakContent(slideNum) {{
            const text = subtitleScript[slideNum] || '';
            updateSubtitle(text ? `【第${slideNum}页/${totalSlides}页】` + text : `第${slideNum}页`);
            if (!isTeaching || !isConnected || !avatarPlatform || !text) return;
            try {{
                const action = actionMap[slideNum];
                if (action) {{
                    await avatarPlatform.writeCmd('action', action);
                }}
                await avatarPlatform.writeText(text, {{ nlp: false }});
            }} catch (error) {{
                console.error('❌ 语音播报失败:', error);
            }}
        }}

        async function startAutoPlay() {{
            const autoBtn = document.getElementById('autoPlayBtn');
            if (isAutoPlaying) {{
                isAutoPlaying = false;
                autoBtn.textContent = '🎬 自动播放';
                autoBtn.classList.remove('stop');
                updateStatus('自动播放已停止');
                return;
            }}
            isAutoPlaying = true;
            autoBtn.textContent = '⏹️ 停止播放';
            autoBtn.classList.add('stop');
            updateStatus('🎬 自动播放开始！', 'recording');

            for (let slide = 1; slide <= totalSlides; slide++) {{
                if (!isAutoPlaying) break;
                showSlide(slide - 1);
                speakContent(slide);
                const duration = slideDurations[slide] || 18000;
                await new Promise(resolve => setTimeout(resolve, duration));
            }}

            isAutoPlaying = false;
            autoBtn.textContent = '🎬 自动播放';
            autoBtn.classList.remove('stop');
            updateStatus('课程播放结束');
        }}

        timelineItems.forEach((item, index) => {{
            item.addEventListener('click', () => {{
                isAutoPlaying = false;
                const autoBtn = document.getElementById('autoPlayBtn');
                autoBtn.textContent = '🎬 自动播放';
                autoBtn.classList.remove('stop');
                showSlide(index);
                speakContent(index + 1);
            }});
        }});

        document.addEventListener('keydown', (event) => {{
            if (event.key === 'ArrowRight' || event.key === ' ') {{
                event.preventDefault();
                nextSlide();
            }} else if (event.key === 'ArrowLeft') {{
                event.preventDefault();
                previousSlide();
            }} else if (event.key === 'Enter') {{
                event.preventDefault();
                speakContent(currentSlide + 1);
            }}
        }});

        window.addEventListener('beforeunload', () => {{
            if (avatarPlatform && isConnected) {{
                avatarPlatform.stop();
            }}
        }});

        document.addEventListener('DOMContentLoaded', () => {{
            document.getElementById('totalSlides').textContent = totalSlides;
            showSlide(0);
        }});
    </script>
</body>
</html>
"""


def build_slide_html(slide: Slide, is_first: bool) -> str:
    board_html = format_text_block(slide.board)
    animation_html = render_animation_block(slide.animation)
    narration_html = format_text_block(slide.narration_text)
    progress = 0 if slide.total <= 1 else int((slide.index - 1) / (slide.total - 1) * 100)
    return (
        f"        <div class=\"slide{' active' if is_first else ''}\" data-slide=\"{slide.index}\">\n"
        f"            <div class=\"slide-content\">\n"
        f"                <aside class=\"slide-meta\">\n"
        f"                    <div class=\"slide-meta__badge\">第 {slide.index} / {slide.total} 页</div>\n"
        f"                    <div class=\"slide-meta__duration\">⏱️ {slide.duration_seconds} 秒</div>\n"
        f"                    <div class=\"slide-progress\"><div class=\"slide-progress__bar\" style=\"width: {progress}%\"></div></div>\n"
        f"                    <div class=\"slide-meta__action\">推荐动作：<span>{html_escape(slide.action)}</span></div>\n"
        f"                    <div class=\"slide-meta__note\">自动播放会额外保留讲稿缓冲时间。</div>\n"
        f"                </aside>\n"
        f"                <section class=\"panel board-pane\">\n"
        f"                    <header class=\"panel__header\"><h2>{convert_inline(slide.title)}</h2></header>\n"
        f"                    <div class=\"panel__body\">\n"
        f"{indent_lines(board_html or '<p>请补充板书内容。</p>', 8)}\n"
        f"                    </div>\n"
        f"                </section>\n"
        f"                <section class=\"panel animation-pane\">\n"
        f"                    <header class=\"panel__header\"><h3>动画执行提示</h3></header>\n"
        f"                    <div class=\"panel__body\">\n"
        f"{indent_lines(animation_html or '<p>请根据脚本补充动画细节。</p>', 8)}\n"
        f"                    </div>\n"
        f"                </section>\n"
        f"                <section class=\"panel narration-pane\">\n"
        f"                    <header class=\"panel__header\"><h3>虚拟人讲稿</h3><span class=\"action-chip\">动作：{html_escape(slide.action)}</span></header>\n"
        f"                    <div class=\"panel__body\">\n"
        f"{indent_lines(narration_html or '<p>请补充讲稿。</p>', 8)}\n"
        f"                    </div>\n"
        f"                </section>\n"
        f"            </div>\n"
        f"        </div>"
    )


def indent_lines(text: str, spaces: int) -> str:
    prefix = " " * spaces
    return "\n".join(prefix + line if line else prefix for line in text.splitlines())


def create_html(lesson: Lesson) -> str:
    slides_html = "\n".join(
        build_slide_html(slide, idx == 0) for idx, slide in enumerate(lesson.slides)
    )
    timeline_html = "\n".join(
        f"            <button class=\"timeline-item{' active' if idx == 0 else ''}\" data-target=\"{slide.index}\">"
        f"<span class=\"timeline-index\">{slide.index:02d}</span>"
        f"<span class=\"timeline-title\">{convert_inline(slide.title)}</span>"
        f"<span class=\"timeline-duration\">{slide.duration_seconds}秒</span>"
        "</button>"
        for idx, slide in enumerate(lesson.slides)
    )
    subtitle_map = {slide.index: narration_to_script_text(slide.narration_text) for slide in lesson.slides}
    action_map = {slide.index: slide.action for slide in lesson.slides}
    titles_map = {slide.index: slide.title for slide in lesson.slides}
    durations_map = {
        slide.index: max(int(slide.duration_seconds * 1000 * 1.15), 15000) for slide in lesson.slides
    }

    class SafeDict(dict):
        def __missing__(self, key: str) -> str:  # type: ignore[override]
            return "{" + key + "}"

    values = SafeDict(
        full_title=lesson.display_name,
        lesson_title=lesson.display_name,
        chapter_number=f"{lesson.chapter}.{lesson.number}",
        total_time=lesson.total_time,
        total_slides=len(lesson.slides),
        slides=slides_html,
        timeline_items=timeline_html,
        subtitle_json=json.dumps(subtitle_map, ensure_ascii=False, indent=2),
        action_json=json.dumps(action_map, ensure_ascii=False, indent=2),
        titles_json=json.dumps(titles_map, ensure_ascii=False, indent=2),
        durations_json=json.dumps(durations_map, ensure_ascii=False, indent=2),
        json_lesson_title=json.dumps(lesson.display_name, ensure_ascii=False),
    )
    return HTML_TEMPLATE.format_map(values)


def ensure_assets():
    assets_dir = OUTPUT_DIR / "assets"
    assets_dir.mkdir(parents=True, exist_ok=True)
    css_path = assets_dir / "noto-serif-sc.css"
    if not css_path.exists():
        css_path.write_text(
            "@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap');\n"
            "body { font-family: 'Noto Serif SC', 'Source Han Serif SC', serif; }\n",
            encoding="utf-8",
        )
    template_css = assets_dir / "lesson-template.css"
    if not template_css.exists():
        template_css.write_text(LESSON_CSS, encoding="utf-8")


LESSON_CSS = """
* { box-sizing: border-box; }
:root {
    --topbar-height: 170px;
    --panel-bg: rgba(15, 23, 42, 0.78);
    --panel-border: rgba(148, 163, 184, 0.35);
    --timeline-bg: rgba(30, 41, 59, 0.7);
}
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
body.blackboard {
    font-family: 'Noto Serif SC', serif;
    background: radial-gradient(circle at top, #1f2a44 0%, #0f172a 45%, #050816 100%);
    color: #e2e8f0;
}
.lesson-topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 3rem 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: flex-start;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 58, 138, 0.78));
    backdrop-filter: blur(12px);
    box-shadow: 0 12px 35px rgba(2, 6, 23, 0.65);
    z-index: 140;
}
.lesson-meta h1 {
    margin: 0 0 0.75rem 0;
    font-size: 1.65rem;
    color: #facc15;
}
.lesson-meta__row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}
.lesson-chip {
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(14, 116, 144, 0.35);
    color: #bae6fd;
    font-size: 0.85rem;
    border: 1px solid rgba(56, 189, 248, 0.35);
}
.lesson-subtitle {
    margin: 0.75rem 0 0;
    color: rgba(226, 232, 240, 0.72);
    font-size: 0.95rem;
}
.lesson-timeline {
    flex: 1;
    min-width: 280px;
    display: flex;
    gap: 0.75rem;
    overflow-x: auto;
    padding-bottom: 0.35rem;
}
.lesson-timeline::-webkit-scrollbar {
    height: 6px;
}
.lesson-timeline::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.35);
    border-radius: 4px;
}
.timeline-item {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    gap: 0.35rem 0.65rem;
    padding: 0.75rem 1rem;
    background: var(--timeline-bg);
    border: 1px solid rgba(148, 163, 184, 0.35);
    border-radius: 14px;
    color: #cbd5f5;
    min-width: 220px;
    cursor: pointer;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.timeline-item:hover { transform: translateY(-3px); }
.timeline-item.active {
    border-color: #38bdf8;
    background: rgba(14, 165, 233, 0.25);
    color: #e0f2fe;
}
.timeline-index {
    grid-row: span 2;
    align-self: center;
    font-weight: 700;
    font-size: 1.25rem;
    color: #facc15;
}
.timeline-title { font-weight: 600; font-size: 0.95rem; }
.timeline-duration { font-size: 0.85rem; color: rgba(226, 232, 240, 0.7); }

.slide-container {
    position: relative;
    width: 100vw;
    height: calc(100vh - var(--topbar-height));
    margin-top: var(--topbar-height);
    overflow: hidden;
}
.slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 2.5rem 6rem;
}
.slide.active { opacity: 1; visibility: visible; }
.slide-content {
    width: min(1380px, 95vw);
    display: grid;
    grid-template-columns: 260px 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 1.5rem;
    grid-template-areas:
        'meta board animation'
        'meta narration narration';
    align-items: stretch;
}
.slide-meta {
    grid-area: meta;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    padding: 1.35rem 1.1rem;
    background: rgba(15, 23, 42, 0.75);
    border-radius: 18px;
    border: 1px solid var(--panel-border);
    box-shadow: inset 0 0 0 1px rgba(14, 116, 144, 0.15);
}
.slide-meta__badge { font-weight: 700; font-size: 1.1rem; color: #facc15; }
.slide-meta__duration { color: #bae6fd; font-size: 0.95rem; }
.slide-progress {
    position: relative;
    height: 6px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.35);
    overflow: hidden;
}
.slide-progress__bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(90deg, #38bdf8, #22d3ee);
}
.slide-meta__action {
    font-size: 0.9rem;
    color: rgba(226, 232, 240, 0.85);
}
.slide-meta__action span { color: #fcd34d; }
.slide-meta__note {
    font-size: 0.8rem;
    color: rgba(148, 163, 184, 0.85);
    line-height: 1.4;
}

.panel {
    background: var(--panel-bg);
    border-radius: 18px;
    border: 1px solid var(--panel-border);
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(6px);
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.35);
}
.panel__header {
    padding: 1rem 1.35rem 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
.panel__header h2, .panel__header h3 {
    margin: 0;
    color: #facc15;
    font-size: 1.35rem;
}
.panel__body {
    padding: 0.35rem 1.35rem 1.35rem;
    overflow-y: auto;
}
.panel__body p {
    line-height: 1.75;
    margin: 0.4rem 0;
}
.panel__body ul, .panel__body ol {
    margin: 0.5rem 0 0.5rem 1.1rem;
    padding-left: 1rem;
}
.panel__body li { margin-bottom: 0.35rem; }
.panel__body ul li::marker { color: #38bdf8; }
.panel__body ol li::marker { color: #f472b6; font-weight: 600; }

.board-pane { grid-area: board; }
.animation-pane { grid-area: animation; }
.narration-pane { grid-area: narration; }
.action-chip {
    font-size: 0.85rem;
    color: #fcd34d;
    border: 1px solid rgba(252, 211, 77, 0.45);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    background: rgba(234, 179, 8, 0.12);
}

.control-bar {
    position: fixed;
    left: 20px;
    top: calc(var(--topbar-height) + 45%);
    transform: translateY(-50%);
    width: 248px;
    background: rgba(15, 23, 42, 0.92);
    border-radius: 20px;
    padding: 1.75rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    z-index: 180;
    box-shadow: 0 25px 45px rgba(2, 6, 23, 0.55);
}
.control-title {
    color: #e2e8f0;
    font-weight: 700;
    text-align: center;
}
.btn {
    padding: 0.78rem 1rem;
    border-radius: 12px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, #475569, #64748b);
    color: #f8fafc;
    transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(15, 23, 42, 0.45); }
.btn.primary { background: linear-gradient(135deg, #ec4899, #d946ef); }
.btn.autoplay { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.btn.stop { background: linear-gradient(135deg, #f97316, #ef4444); }
.btn:disabled { opacity: 0.55; cursor: not-allowed; box-shadow: none; }
.control-hint, .control-shortcuts {
    color: rgba(248, 250, 252, 0.85);
    font-size: 0.85rem;
    text-align: center;
    line-height: 1.4;
}
.control-shortcuts { color: rgba(226, 232, 240, 0.75); }

.avatar-container {
    position: fixed;
    top: calc(var(--topbar-height) + 48%);
    right: 4%;
    transform: translateY(-50%);
    width: 420px;
    height: 640px;
    z-index: 160;
    pointer-events: none;
}

.subtitle-area {
    position: fixed;
    left: 50%;
    bottom: 28px;
    transform: translateX(-50%);
    width: min(960px, 90vw);
    padding: 0.85rem 1.35rem;
    background: rgba(2, 6, 23, 0.82);
    border-radius: 12px;
    font-size: 1.05rem;
    line-height: 1.55;
    text-align: center;
    border: 1px solid rgba(148, 163, 184, 0.35);
}

.status-indicator {
    position: fixed;
    top: 16px;
    right: 24px;
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.85);
    color: #f8fafc;
    font-weight: 600;
    letter-spacing: 0.02em;
    z-index: 220;
    box-shadow: 0 12px 28px rgba(2, 6, 23, 0.45);
}
.status-indicator.connected { background: rgba(34, 197, 94, 0.85); }
.status-indicator.error { background: rgba(248, 113, 113, 0.85); }
.status-indicator.connecting { background: rgba(251, 191, 36, 0.85); }
.status-indicator.recording { background: rgba(59, 130, 246, 0.85); }

@media (max-width: 1280px) {
    .lesson-topbar { padding: 1.25rem 1.5rem; gap: 1.5rem; }
    .slide-content {
        grid-template-columns: 1fr;
        grid-template-areas:
            'meta'
            'board'
            'animation'
            'narration';
    }
    .control-bar {
        position: static;
        transform: none;
        width: auto;
        margin: 1.25rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .btn { flex: 1 1 46%; }
    .avatar-container { display: none; }
}

@media (max-width: 768px) {
    :root { --topbar-height: 210px; }
    .lesson-topbar { padding: 1rem 1.1rem; }
    .timeline-item { min-width: 180px; }
    .subtitle-area { font-size: 0.95rem; }
}
"""


def write_lessons(lessons: List[Lesson]):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    ensure_assets()
    for lesson in lessons:
        html_content = create_html(lesson)
        target_file = OUTPUT_DIR / lesson.filename
        target_file.write_text(html_content, encoding="utf-8")


def write_index(lessons: List[Lesson]):
    index_lines = [
        "<!DOCTYPE html>",
        "<html lang=\"zh-CN\">",
        "<head>",
        "  <meta charset=\"UTF-8\">",
        "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "  <title>虚拟人录屏课程索引</title>",
        "  <link rel=\"stylesheet\" href=\"./assets/noto-serif-sc.css\">",
        "  <style>",
        "    body { background:#0f172a; color:#e2e8f0; font-family:'Noto Serif SC',serif; padding:3rem 1.5rem; }",
        "    h1 { text-align:center; margin-bottom:2rem; color:#facc15; }",
        "    ul { max-width:960px; margin:0 auto; padding:0; list-style:none; }",
        "    li { background:rgba(15,23,42,0.75); border:1px solid rgba(148,163,184,0.25); margin-bottom:1rem; border-radius:12px; padding:1rem 1.25rem; }",
        "    a { color:#38bdf8; text-decoration:none; font-weight:600; }",
        "    a:hover { text-decoration:underline; }",
        "    .meta { color:#cbd5f5; font-size:0.9rem; margin-top:0.35rem; }",
        "  </style>",
        "</head>",
        "<body>",
        "  <h1>第三章及以后虚拟人录屏课程索引</h1>",
        "  <ul>",
    ]
    for lesson in lessons:
        rel = lesson.filename
        meta = html_escape(lesson.total_time)
        index_lines.append(
            f"    <li><a href=\"{rel}\">{lesson.display_name}</a><div class=\"meta\">预计总时长：{meta}</div></li>"
        )
    index_lines.extend(["  </ul>", "</body>", "</html>"])
    (OUTPUT_DIR / "index.html").write_text("\n".join(index_lines), encoding="utf-8")


def html_escape(text: str) -> str:
    import html

    return html.escape(text, quote=False)


def main():
    blueprint_text = read_blueprint()
    lessons = parse_lessons(blueprint_text)
    if not lessons:
        raise SystemExit("No lessons found for generation.")
    write_lessons(lessons)
    write_index(lessons)
    print(f"Generated {len(lessons)} lessons in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()

