const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

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

let isDevServer = !!process.argv.some((arg) => arg.includes("webpack-dev-server"));
let environment = process.argv.some((arg) => arg.includes("development")) ? 'development' : 'production';

const getFile = (file, environment) =>
  `${file}${environment ? "." + environment : ""}`;

module.exports = function override(config, env) {

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
