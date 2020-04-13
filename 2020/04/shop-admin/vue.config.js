const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
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
  },
  devServer: {
    open: true // 打开浏览器窗口
  }
}