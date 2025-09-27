#!/usr/bin/env python3
"""Generate MP4 lesson videos from the existing HTML slide decks.

The renderer inspects each HTML file inside ``录屏课件`` and extracts the
left-hand "blackboard" text, narration subtitles, and estimated per-slide
length.  It then synthesises a 1920x1080 MP4 with a fixed left-board/right-
animation layout that mirrors the recording template requested by the
production team.  The right half shows a lightweight abstract animation so
the exported MP4 can serve as a capture plate without any UI chrome.

The script purposefully keeps the pipeline dependency-free from paid avatar
SDKs.  It generates silent videos that last at least five minutes by padding
the final slide whenever the sum of the per-slide durations falls short of
300 seconds.  This gives operators enough room to later composite the paid
virtual presenter without wasting billable minutes.
"""
from __future__ import annotations

import argparse
import math
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Tuple

import numpy as np
from bs4 import BeautifulSoup, NavigableString
from moviepy.editor import VideoClip, concatenate_videoclips
from PIL import Image, ImageDraw, ImageFont

# Constants for layout
FRAME_WIDTH = 1920
FRAME_HEIGHT = 1080
LEFT_WIDTH = FRAME_WIDTH // 2
RIGHT_WIDTH = FRAME_WIDTH - LEFT_WIDTH
BOTTOM_SUBTITLE_HEIGHT = 140
BACKGROUND_COLOR = (26, 26, 46)
LEFT_PANEL_COLOR = (22, 31, 55)
RIGHT_PANEL_COLOR = (12, 26, 58)
SUBTITLE_BG = (10, 10, 10, 220)
SUBTITLE_TEXT_COLOR = (240, 240, 240)
BOARD_TEXT_COLOR = (224, 224, 224)
HEADING_COLOR = (241, 196, 15)
BULLET_COLOR = (30, 215, 96)

FONT_PATH = Path("common-assets/fonts/NotoSerifSC-Regular.otf")
DEFAULT_FONT_FALLBACK = "DejaVuSans.ttf"

FPS = 30
MIN_TOTAL_SECONDS = 300  # five minutes minimum runtime per video


@dataclass
class SlideSpec:
    index: int
    board_lines: List[Tuple[str, str]]
    subtitle: str
    duration: float


def load_font(size: int) -> ImageFont.FreeTypeFont:
    """Load Noto Serif SC for proper CJK coverage with a fallback."""
    if FONT_PATH.exists():
        return ImageFont.truetype(str(FONT_PATH), size=size)
    return ImageFont.truetype(DEFAULT_FONT_FALLBACK, size=size)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> List[str]:
    """Wrap arbitrary (potentially CJK) text to fit within ``max_width``."""
    if not text:
        return []
    lines: List[str] = []
    current = ""
    for char in text:
        if char == "\n":
            if current:
                lines.append(current)
            current = ""
            continue
        trial = current + char
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = char
    if current:
        lines.append(current)
    return lines


BoardSegment = Tuple[str, str]


def extract_script_from_html(path: Path) -> Tuple[List[List[BoardSegment]], Dict[int, str], Dict[int, float]]:
    """Return board text segments, narration subtitles and durations for each slide."""
    html = path.read_text(encoding="utf-8")
    soup = BeautifulSoup(html, "html.parser")

    board_texts: List[List[BoardSegment]] = []
    for block in soup.select(".slide .blackboard-text"):
        slide_segments: List[BoardSegment] = []
        for child in block.children:
            if isinstance(child, NavigableString):
                text = str(child).strip()
                if text:
                    slide_segments.append(("paragraph", text))
                continue

            if child.name in {"h1", "h2", "h3"}:
                text = child.get_text(strip=True)
                if text:
                    slide_segments.append(("heading", text))
            elif child.name in {"p", "div"}:
                text = child.get_text(" ", strip=True)
                if text:
                    slide_segments.append(("paragraph", text))
            elif child.name in {"ul", "ol"}:
                for li in child.find_all("li", recursive=False):
                    li_text = li.get_text(" ", strip=True)
                    if li_text:
                        slide_segments.append(("bullet", li_text))
            else:
                text = child.get_text(" ", strip=True)
                if text:
                    slide_segments.append(("paragraph", text))

        board_texts.append(slide_segments)

    subtitle_pattern = re.compile(r"(\d+):\s*`([^`]*)`")
    subtitles: Dict[int, str] = {int(idx): content.strip() for idx, content in subtitle_pattern.findall(html)}

    duration_block_match = re.search(r"function\s+getSlideDuration\s*\(.*?\)\s*{([^}]*)}", html, re.S)
    durations: Dict[int, float] = {}
    if duration_block_match:
        block = duration_block_match.group(1)
        for idx, value in re.findall(r"(\d+):\s*(\d+)", block):
            durations[int(idx)] = int(value) / 1000.0

    return board_texts, subtitles, durations


def normalise_slide_specs(board_texts: List[List[BoardSegment]], subtitles: Dict[int, str], durations: Dict[int, float]) -> List[SlideSpec]:
    draw = ImageDraw.Draw(Image.new("RGB", (10, 10)))
    body_font = load_font(40)
    title_font = load_font(54)

    slides: List[SlideSpec] = []
    for idx, board_segments in enumerate(board_texts, start=1):
        paragraph_lines: List[Tuple[str, str]] = []
        for segment_type, segment_text in board_segments:
            if not segment_text:
                paragraph_lines.append(("blank", ""))
                continue

            if segment_type == "heading":
                heading_lines = wrap_text(draw, segment_text, title_font, LEFT_WIDTH - 120)
                for line in heading_lines:
                    paragraph_lines.append(("heading", line))
                paragraph_lines.append(("blank", ""))
            elif segment_type == "bullet":
                bullet_lines = wrap_text(draw, segment_text, body_font, LEFT_WIDTH - 160)
                for line in bullet_lines:
                    paragraph_lines.append(("bullet", line))
                paragraph_lines.append(("blank", ""))
            else:
                lines = wrap_text(draw, segment_text, body_font, LEFT_WIDTH - 120)
                for line in lines:
                    paragraph_lines.append(("body", line))
                paragraph_lines.append(("blank", ""))

        if paragraph_lines and paragraph_lines[-1][0] == "blank":
            paragraph_lines.pop()

        slides.append(
            SlideSpec(
                index=idx,
                board_lines=paragraph_lines,
                subtitle=subtitles.get(idx, ""),
                duration=durations.get(idx, 18.0),
            )
        )

    # Ensure the total runtime meets the five-minute baseline
    total_duration = sum(spec.duration for spec in slides)
    if total_duration < MIN_TOTAL_SECONDS and slides:
        slides[-1].duration += MIN_TOTAL_SECONDS - total_duration
    return slides


def render_board_panel(slide: SlideSpec, heading_font: ImageFont.FreeTypeFont, body_font: ImageFont.FreeTypeFont) -> Image.Image:
    panel = Image.new("RGB", (LEFT_WIDTH, FRAME_HEIGHT), LEFT_PANEL_COLOR)
    draw = ImageDraw.Draw(panel)
    y = 80
    line_spacing = 12
    for line_type, content in slide.board_lines:
        if line_type == "blank":
            y += body_font.size + line_spacing
            continue

        if line_type == "heading":
            font = heading_font
            color = HEADING_COLOR
            text = content
            x_offset = 60
        elif line_type == "bullet":
            font = body_font
            color = BULLET_COLOR
            text = f"• {content}"
            x_offset = 80
        else:
            font = body_font
            color = BOARD_TEXT_COLOR
            text = content
            x_offset = 60

        draw.text((x_offset, y), text, font=font, fill=color)
        y += font.size + line_spacing
    return panel


def render_subtitle_lines(subtitle: str, font: ImageFont.FreeTypeFont, width: int) -> List[str]:
    draw = ImageDraw.Draw(Image.new("RGB", (10, 10)))
    return wrap_text(draw, subtitle, font, width - 80)


def generate_animation_frame(base: Image.Image, t: float, slide_index: int) -> Image.Image:
    frame = base.copy()
    draw = ImageDraw.Draw(frame, "RGBA")

    right_origin_x = LEFT_WIDTH
    right_origin_y = 0
    right_rect = (right_origin_x, right_origin_y, FRAME_WIDTH, FRAME_HEIGHT)
    draw.rectangle(right_rect, fill=RIGHT_PANEL_COLOR)

    center_x = LEFT_WIDTH + RIGHT_WIDTH // 2
    center_y = FRAME_HEIGHT // 2

    palette = [
        (76, 175, 80, 160),
        (33, 150, 243, 160),
        (255, 193, 7, 160),
        (244, 67, 54, 160),
    ]

    for i, color in enumerate(palette):
        angle = t * 0.8 + i * 0.6 + slide_index
        radius = 80 + 30 * math.sin(t * 0.9 + i)
        x = center_x + math.cos(angle) * (200 + 30 * i)
        y = center_y + math.sin(angle * 1.3) * (160 + 20 * i)
        bbox = [
            x - radius,
            y - radius,
            x + radius,
            y + radius,
        ]
        draw.ellipse(bbox, fill=color)

    # Draw orbits for additional motion cues
    for orbit in range(3):
        orbit_radius = 160 + orbit * 60
        orbit_color = (255, 255, 255, 40)
        bbox = [
            center_x - orbit_radius,
            center_y - orbit_radius,
            center_x + orbit_radius,
            center_y + orbit_radius,
        ]
        draw.ellipse(bbox, outline=orbit_color, width=2)

    return frame


def create_slide_clip(slide: SlideSpec, heading_font: ImageFont.FreeTypeFont, body_font: ImageFont.FreeTypeFont, subtitle_font: ImageFont.FreeTypeFont) -> VideoClip:
    board_panel = render_board_panel(slide, heading_font, body_font)
    subtitle_lines = render_subtitle_lines(slide.subtitle, subtitle_font, FRAME_WIDTH)

    base_image = Image.new("RGB", (FRAME_WIDTH, FRAME_HEIGHT), BACKGROUND_COLOR)
    base_image.paste(board_panel, (0, 0))

    subtitle_bg = Image.new("RGBA", (FRAME_WIDTH, BOTTOM_SUBTITLE_HEIGHT), SUBTITLE_BG)
    base_image.paste(subtitle_bg, (0, FRAME_HEIGHT - BOTTOM_SUBTITLE_HEIGHT), subtitle_bg)

    draw = ImageDraw.Draw(base_image)
    subtitle_y = FRAME_HEIGHT - BOTTOM_SUBTITLE_HEIGHT + 35
    for line in subtitle_lines:
        draw.text((60, subtitle_y), line, font=subtitle_font, fill=SUBTITLE_TEXT_COLOR)
        subtitle_y += subtitle_font.size + 8

    def make_frame(t: float) -> np.ndarray:
        frame = generate_animation_frame(base_image, t, slide.index)
        return np.array(frame)

    return VideoClip(make_frame, duration=slide.duration).set_fps(FPS)


def export_video(html_path: Path, output_dir: Path) -> Path:
    board_texts, subtitles, durations = extract_script_from_html(html_path)
    slides = normalise_slide_specs(board_texts, subtitles, durations)

    heading_font = load_font(68)
    body_font = load_font(46)
    subtitle_font = load_font(40)

    clips = [create_slide_clip(slide, heading_font, body_font, subtitle_font) for slide in slides]
    video = concatenate_videoclips(clips, method="compose")

    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / (html_path.stem + ".mp4")

    video.write_videofile(
        str(output_path),
        codec="libx264",
        audio=False,
        fps=FPS,
        bitrate="5000k",
        temp_audiofile=str(output_path.with_suffix(".temp-audio.m4a")),
        remove_temp=True,
    )
    return output_path


def iter_html_files(paths: Iterable[Path]) -> Iterable[Path]:
    for path in paths:
        if path.is_dir():
            yield from iter_html_files(sorted(path.glob("*.html")))
        elif path.suffix.lower() == ".html":
            yield path


def main() -> None:
    parser = argparse.ArgumentParser(description="Render MP4 videos from lesson HTML files.")
    parser.add_argument(
        "sources",
        nargs="*",
        type=Path,
        default=[Path("录屏课件")],
        help="HTML files or directories to render.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("录屏课件/mp4"),
        help="Output directory for generated MP4 files.",
    )
    args = parser.parse_args()

    html_files = list(iter_html_files(args.sources))
    if not html_files:
        raise SystemExit("未找到任何可用的HTML课件文件。")

    for html_path in html_files:
        print(f"🎬 正在导出 {html_path} ...")
        try:
            output_path = export_video(html_path, args.output)
        except Exception as exc:  # pragma: no cover - CLI feedback
            print(f"❌ {html_path} 导出失败: {exc}")
        else:
            print(f"✅ 已生成 {output_path}")


if __name__ == "__main__":
    main()
