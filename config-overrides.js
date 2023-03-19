const { override, addDecoratorsLegacy, addWebpackAlias } = require("customize-cra");
const TerserPlugin = require("terser-webpack-plugin")
const path = require("path");
module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@": path.resolve(__dirname, './src')
  }),
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [
        ...config.plugins,
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            },
            format: {
              comments: false
            }
          }
        })
      ]
    }
    return config
  }
)