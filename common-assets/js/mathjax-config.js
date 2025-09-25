window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['ams']}
  },
  svg: {
    fontCache: 'global'
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore'
  }
};
