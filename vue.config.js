module.exports = {
  transpileDependencies: true,

  // chainWebpack: (config) => {
  //     config.resolve.symlinks(true) // 修复热更新失效
  // }
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js'
    }
  },
  devServer: {
    port: 8000
  }
}
