const { override, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  (config) => {
    config.resolve.fallback = {
      fs: false,
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/')
    }
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ]
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [
        ...config.plugins,
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.error']
            },
            format: {
              comments: false
            }
          }
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        })
      ]
    }
    return config
  }
)
