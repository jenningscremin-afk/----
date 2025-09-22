// navigation.js - 课件导航和控制脚本
// 用于处理全局播放控制、键盘导航等功能

// 全局播放控制变量
let globalPlayerState = {
    isPlaying: false,
    speed: 1.0,
    speedOptions: [0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 6.0],
    currentSpeedIndex: 1
};

// 初始化全局播放控制
function initGlobalPlayerControl() {
    // 创建控制面板
    const controlPanel = document.createElement('div');
    controlPanel.id = 'global-player-control';
    controlPanel.className = 'global-player-control';
    controlPanel.innerHTML = `
        <div id="player-toggle" class="player-toggle">
            <span class="player-icon">▶</span>
        </div>
        <div id="player-panel" class="player-panel">
            <div class="player-controls">
                <button id="play-pause-btn" class="player-btn play-btn">▶</button>
                <button id="speed-btn" class="player-btn speed-btn">1.0x</button>
                <button id="reset-btn" class="player-btn reset-btn">🔄</button>
            </div>
        </div>
    `;

    document.body.appendChild(controlPanel);

    // 获取控制元素
    const playerToggle = document.getElementById('player-toggle');
    const playerPanel = document.getElementById('player-panel');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const speedBtn = document.getElementById('speed-btn');
    const resetBtn = document.getElementById('reset-btn');

    // 切换面板显示
    playerToggle.addEventListener('click', () => {
        controlPanel.classList.toggle('expanded');
    });

    // 播放/暂停按钮
    playPauseBtn.addEventListener('click', () => {
        globalPlayerState.isPlaying = !globalPlayerState.isPlaying;
        updatePlayPauseButton();
        controlAllAnimations();
    });

    // 速度按钮
    speedBtn.addEventListener('click', () => {
        globalPlayerState.currentSpeedIndex = (globalPlayerState.currentSpeedIndex + 1) % globalPlayerState.speedOptions.length;
        globalPlayerState.speed = globalPlayerState.speedOptions[globalPlayerState.currentSpeedIndex];
        speedBtn.textContent = globalPlayerState.speed.toFixed(1) + 'x';
        controlAllAnimations();
    });

    // 重置按钮
    resetBtn.addEventListener('click', () => {
        globalPlayerState.isPlaying = false;
        globalPlayerState.speed = 1.0;
        globalPlayerState.currentSpeedIndex = 1;
        updatePlayPauseButton();
        speedBtn.textContent = '1.0x';
        resetAllAnimations();
    });

    // 点击外部关闭面板
    document.addEventListener('click', (e) => {
        if (!controlPanel.contains(e.target)) {
            controlPanel.classList.remove('expanded');
        }
    });
}

// 更新播放/暂停按钮状态
function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (globalPlayerState.isPlaying) {
        playPauseBtn.textContent = '⏸';
        playPauseBtn.classList.add('playing');
    } else {
        playPauseBtn.textContent = '▶';
        playPauseBtn.classList.remove('playing');
    }
}

// 控制所有动画
function controlAllAnimations() {
    // 发送消息给iframe
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        if (iframe.contentWindow) {
            try {
                iframe.contentWindow.postMessage({
                    type: 'globalPlayerControl',
                    action: globalPlayerState.isPlaying ? 'play' : 'pause',
                    speed: globalPlayerState.speed
                }, '*');
            } catch (e) {
                console.log('无法控制iframe:', e);
            }
        }
    });

    // 控制页面内动画
    controlPageAnimations();
}

// 重置所有动画
function resetAllAnimations() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        if (iframe.contentWindow) {
            try {
                iframe.contentWindow.postMessage({
                    type: 'globalPlayerControl',
                    action: 'reset'
                }, '*');
            } catch (e) {
                console.log('无法控制iframe:', e);
            }
        }
    });

    resetPageAnimations();
}

// 控制页面内动画
function controlPageAnimations() {
    // 这里可以添加控制页面内动画的逻辑
    // 例如控制D3动画、CSS动画等
}

// 重置页面内动画
function resetPageAnimations() {
    // 这里可以添加重置页面内动画的逻辑
}

// 键盘导航功能
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // 防止在输入框中触发导航
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'PageDown':
            case 'Enter':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
            case 'Backspace':
                e.preventDefault();
                previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(totalSlides - 1);
                break;
            case 'p':
            case 'P':
                // 播放/暂停切换
                const playPauseBtn = document.getElementById('play-pause-btn');
                if (playPauseBtn) {
                    playPauseBtn.click();
                }
                break;
            case 'r':
            case 'R':
                // 重置
                const resetBtn = document.getElementById('reset-btn');
                if (resetBtn) {
                    resetBtn.click();
                }
                break;
        }
    });
}

// 鼠标滚轮导航
function initWheelNavigation() {
    document.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            nextSlide();
        } else {
            previousSlide();
        }
    }, { passive: false });
}

// 初始化所有导航功能
function initNavigation() {
    initGlobalPlayerControl();
    initKeyboardNavigation();
    initWheelNavigation();
}

// 当DOM加载完成时初始化
document.addEventListener('DOMContentLoaded', initNavigation);

// 导出函数供全局使用
window.initGlobalPlayerControl = initGlobalPlayerControl;
window.controlAllAnimations = controlAllAnimations;
window.resetAllAnimations = resetAllAnimations;
