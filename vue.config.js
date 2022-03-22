'use strict'
const path = require('path')

const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = process.env.VUE_APP_TITLE

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css/,
        filename: '[path].gz[query]',
        minRatio: 1,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = name
      return args
    })

    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
