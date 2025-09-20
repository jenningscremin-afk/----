from pathlib import Path
import re

base = Path(r"D:/WPS Office/2025/254805819/WPS云盘/教材/在线课堂/网页资源")
files = ['lab 3-8.html', 'lab 3-9.html', 'lab 3-10.html']

setup_pattern = re.compile(
    r"function setupCanvas\(canvas\) {\s*const ctx = canvas.getContext\('2d'\);\s*const rect = canvas.getBoundingClientRect\(\);\s*const dpr = window.devicePixelRatio \|\| 1;\s*canvas\.width = rect\.width \* dpr;\s*canvas\.height = rect\.height \* dpr;\s*canvas\.style\.width = rect\.width \+ 'px';\s*canvas\.style\.height = rect\.height \+ 'px';\s*ctx\.scale\(dpr, dpr\);\s*return { ctx, width: rect\.width, height: rect\.height };\s*}",
    re.S
)

setup_replacement = '''function setupCanvas(canvas) {
            const ctx = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            let width = rect.width;
            let height = rect.height;

            if ((width || 0) < 10 || (height || 0) < 10) {
                const parent = canvas.parentElement;
                const fallbackWidth = parseFloat(canvas.dataset.lastWidth || '') || (parent.clientWidth if parent else 0) || 640;
                const fallbackHeight = parseFloat(canvas.dataset.lastHeight || '') || (parent.clientHeight if parent else 0) || 360;
                width = fallbackWidth;
                height = fallbackHeight;
            }

            canvas.dataset.lastWidth = width;
            canvas.dataset.lastHeight = height;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            return { ctx, width, height };
        }'''

for name in files:
    path = base / name
    text = path.read_text(encoding='utf-8')
    new_text, count = setup_pattern.subn(setup_replacement, text, count=1)
    if count != 1:
        raise SystemExit(f'Failed to update setupCanvas in {name}')

    if name == 'lab 3-8.html':
        old_block = "            initEvents();\r\n            updateCanvas();\r\n            const firstButton = document.querySelector('.nav-btn');"
        new_block = "            initEvents();\r\n            const firstButton = document.querySelector('.nav-btn');\r\n            if (firstButton) {\r\n                switchPage(firstButton.textContent.trim(), firstButton);\r\n            } else {\r\n                updateCanvas();\r\n            }\r\n"
        new_text = new_text.replace(old_block, new_block, 1)
    elif name == 'lab 3-9.html':
        old_block = "            initEvents();\r\n            updateCanvas();\r\n            const firstButton = document.querySelector('.nav-btn');"
        new_block = "            initEvents();\r\n            const firstButton = document.querySelector('.nav-btn');\r\n            if (firstButton) {\r\n                switchPage(firstButton.textContent.trim(), firstButton);\r\n            } else {\r\n                updateCanvas();\r\n            }\r\n"
        new_text = new_text.replace(old_block, new_block, 1)
    else:
        old_block = "            initEvents();\r\n            updateCanvas();\r\n            const firstButton = document.querySelector('.nav-btn');\r\n            if (firstButton) {\r\n                switchPage(firstButton.dataset.section);\r\n            }"
        new_block = "            initEvents();\r\n            const firstButton = document.querySelector('.nav-btn');\r\n            if (firstButton) {\r\n                switchPage(firstButton.dataset.section);\r\n            } else {\r\n                updateCanvas();\r\n            }"
        new_text = new_text.replace(old_block, new_block, 1)

    with open(path, 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(new_text)

print('Files updated successfully')
