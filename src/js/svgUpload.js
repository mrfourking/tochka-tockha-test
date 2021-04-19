const uploadSvgFiles = () => {
  function requireAll(r) {
    r.keys().forEach(r);
  }

  requireAll(require.context('../img/sprite/', true, /\.svg$/));
};

export {uploadSvgFiles};
