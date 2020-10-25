const { override } = require('customize-cra');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const addProxy = (name, port) => {
  const config = {};
  if (port) {
    config[`/${name}/`] = {
      target: `http://localhost:${port}`,
      secure: false,
      changeOrigin: true
    };
    return config
  } else {
    const pathRewrite = {};
    pathRewrite[`^/${name}`] = '';
    config[`/${name}/`] = {
      target: `https://staging--micro-food-${name}.netlify.app`,
      pathRewrite,
      secure: false,
      changeOrigin: true
    };
    return config;
  }
};

let isDevServer = !!process.argv.some((arg) => arg.includes("webpack-dev-server"));

const getFile = (file, environment) =>
  `${file}${environment ? "." + environment : ""}`;

module.exports = {
  webpack: override(
    (config, environment) => {
      const dotRedirectsConfig = getFile("_redirects", environment);
      config.externals = {
        React: "react",
        ReactDOM: "react-dom",
      };
      !isDevServer &&
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(process.cwd(), dotRedirectsConfig),
              to: path.resolve(
                process.cwd(),
                `./build/_redirects`
              ),
              toType: "file",
            },
          ],
        })
      );
      return config
    },
  ),
  jest: config => config,
  devServer: configFunction => (proxy, allowedHost) => {
    proxy = {
      ...proxy,
      // ...addProxy('catalog', 3200),
      ...addProxy('catalog'),
      ...addProxy('checkout'),
      ...addProxy('cart'),
    };
    const config = configFunction(proxy, allowedHost);
    config.disableHostCheck = true;
    config.headers = { 'Access-Control-Allow-Origin': '*' };
    config.historyApiFallback = true;
    return config;
  },
  paths: (paths, env) => paths
};
