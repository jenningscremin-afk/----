(function () {
    const STYLE_ID = 'math-ui-enhancer-styles';
    const STYLE_CONTENT = `
    .math-select-wrapper {
        position: relative;
        width: 100%;
        display: block;
    }
    .math-select-source {
        position: absolute;
        inset: 0;
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
    }
    .math-select-display {
        width: 100%;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(148, 163, 184, 0.4);
        background: #ffffff;
        color: #1f2937;
        font-size: 15px;
        line-height: 1.4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
    }
    .math-select-display::after {
        content: '▾';
        font-size: 12px;
        color: #94a3b8;
        margin-left: auto;
    }
    .math-select-wrapper.open .math-select-display {
        border-color: rgba(79, 70, 229, 0.45);
        box-shadow: 0 10px 18px rgba(79, 70, 229, 0.18);
    }
    .math-select-display:focus-visible {
        outline: 2px solid rgba(129, 140, 248, 0.6);
        outline-offset: 3px;
    }
    .math-select-options {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        gap: 6px;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid rgba(79, 70, 229, 0.16);
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 20px 36px rgba(15, 23, 42, 0.22);
        backdrop-filter: blur(8px);
        z-index: 35;
        max-height: 260px;
        overflow-y: auto;
    }
    .math-select-wrapper.open .math-select-options {
        display: flex;
    }
    .math-select-option {
        padding: 8px 10px;
        border-radius: 10px;
        border: none;
        background: rgba(79, 70, 229, 0.08);
        font-size: 15px;
        color: #1f2937;
        text-align: left;
        cursor: pointer;
        display: flex;
        gap: 8px;
        align-items: center;
        transition: background 0.2s ease, transform 0.1s ease;
    }
    .math-select-option:hover {
        background: rgba(79, 70, 229, 0.18);
        transform: translateX(2px);
    }
    .math-select-option:focus-visible {
        outline: 2px solid rgba(129, 140, 248, 0.6);
        outline-offset: 3px;
    }
    `;

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = STYLE_CONTENT;
        document.head.appendChild(style);
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function sanitizeMathText(text) {
        if (typeof text !== 'string') {
            return '';
        }
        let trimmed = text.trim();
        if (!trimmed) {
            return '';
        }
        if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
            return trimmed;
        }
        if (trimmed.startsWith('\\(') || trimmed.startsWith('\\[')) {
            return trimmed;
        }
        trimmed = trimmed.replace(/^\$+|\$+$/g, '');
        const hasMathPattern = /\\|\^|_|=|[+\-\*\/]|∫|Σ|∞|π/.test(trimmed);
        if (hasMathPattern) {
            return `\\(${trimmed}\\)`;
        }
        return escapeHtml(trimmed);
    }

    function setMathContent(element, text) {
        if (!element) {
            return;
        }
        element.innerHTML = sanitizeMathText(text);
        if (typeof window.scheduleMathRender === 'function') {
            window.scheduleMathRender();
        }
    }

    function enhanceSelect(select) {
        if (!select || select.dataset.mathEnhanced === 'true') {
            return;
        }
        const wrapper = document.createElement('div');
        wrapper.className = 'math-select-wrapper';
        const parent = select.parentNode;
        parent.insertBefore(wrapper, select);
        wrapper.appendChild(select);
        select.classList.add('math-select-source');
        select.dataset.mathEnhanced = 'true';
        try {
            const computed = window.getComputedStyle(select);
            if (computed && computed.margin) {
                wrapper.style.margin = computed.margin;
            }
            select.style.margin = '0';
        } catch (error) {
            // ignore style read errors
        }

        const display = document.createElement('button');
        display.type = 'button';
        display.className = 'math-select-display';
        display.setAttribute('aria-haspopup', 'listbox');
        display.setAttribute('aria-expanded', 'false');
        wrapper.appendChild(display);

        const list = document.createElement('div');
        list.className = 'math-select-options';
        wrapper.appendChild(list);

        const options = Array.from(select.options);
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'math-select-option';
            btn.dataset.value = option.value;
            setMathContent(btn, option.getAttribute('data-math') || option.textContent);
            btn.addEventListener('click', event => {
                event.preventDefault();
                select.value = option.value;
                select.dispatchEvent(new Event('change', { bubbles: true }));
                wrapper.classList.remove('open');
                display.setAttribute('aria-expanded', 'false');
                updateDisplay();
            });
            list.appendChild(btn);
        });

        function updateDisplay() {
            const selected = select.options[select.selectedIndex];
            const label = selected ? (selected.getAttribute('data-math') || selected.textContent) : '';
            setMathContent(display, label || '请选择');
        }

        display.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            const willOpen = !wrapper.classList.contains('open');
            document.querySelectorAll('.math-select-wrapper.open').forEach(w => {
                if (w !== wrapper) {
                    w.classList.remove('open');
                    const btn = w.querySelector('.math-select-display');
                    if (btn) {
                        btn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            wrapper.classList.toggle('open');
            display.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            if (willOpen && typeof window.scheduleMathRender === 'function') {
                requestAnimationFrame(() => window.scheduleMathRender());
            }
        });

        select.addEventListener('change', updateDisplay);
        updateDisplay();
    }

    function enhanceAllSelects() {
        document.querySelectorAll('select').forEach(enhanceSelect);
    }

    document.addEventListener('click', event => {
        if (!event.target.closest('.math-select-wrapper')) {
            document.querySelectorAll('.math-select-wrapper.open').forEach(wrapper => {
                wrapper.classList.remove('open');
                const btn = wrapper.querySelector('.math-select-display');
                if (btn) {
                    btn.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });

    function initEnhancer() {
        injectStyles();
        enhanceAllSelects();
    }

    document.addEventListener('DOMContentLoaded', initEnhancer);
    window.addEventListener('pageshow', () => {
        setTimeout(initEnhancer, 0);
    });

    window.MathUIEnhancer = {
        setMathContent,
        sanitizeMathText,
        enhanceAllSelects
    };
})();
