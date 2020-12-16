const build = require('./build')

module.exports = {
  pages: build.pages,
  outputDir: build.outputDir,
  publicPath: build.publicPath,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/layout.scss";
        `
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: build.proxy
  }
}
