window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
    digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
    packages: {'[+]': ['ams', 'noerrors', 'color']},
    macros: {
      // 常用宏定义
      RR: '{\\mathbb{R}}',
      NN: '{\\mathbb{N}}',
      ZZ: '{\\mathbb{Z}}',
      QQ: '{\\mathbb{Q}}',
      CC: '{\\mathbb{C}}',
      eps: '{\\varepsilon}',
      to: '{\\rightarrow}'
    }
  },
  svg: {
    fontCache: 'global',
    scale: 1,                    // 全局缩放因子
    minScale: .5,               // 最小缩放
    matchFontHeight: true,      // 匹配字体高度
    mtextInheritFont: false,    // 不继承页面字体
    merrorInheritFont: true,    // 错误消息继承字体
    mathmlSpacing: false        // 使用 SVG 间距
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
    renderActions: {
      addMenu: []               // 禁用右键菜单以提高性能
    }
  },
  startup: {
    ready: () => {
      console.log('MathJax is ready');
      MathJax.startup.defaultReady();
    }
  }
};
