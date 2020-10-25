const proxy = (name) => {
  const config = {};
  const pathRewrite = {};
  pathRewrite[`^/${name}`] = '';
  config[name] = {
    target: `https://micro-food-${name}.netlify.app`,
    pathRewrite,
    secure: false,
    changeOrigin: true
  }
};

module.exports = function override(config, env) {
  config.externals = {
    React: "react",
    ReactDOM: "react-dom",
  };
  config.devServer = {
    ...config.devServer,
    proxy: {
      ...proxy('catalog'),
      ...proxy('checkout'),
      ...proxy('cart'),
    },
    disableHostCheck: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
  };
  return config;
}
