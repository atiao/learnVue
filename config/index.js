'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: { //开发环境配置

    // Paths
    assetsSubDirectory: 'static',  //webpack编译输出的二级文件夹
    assetsPublicPath: '/',  //webpack编译输出的发布路径
    proxyTable: {}, //请求代理

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),  //本地文件系统上的绝对路径

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),  // 编译输出的静态资源路径
    assetsSubDirectory: 'static',  //被webpack编译处理过的资源文件会在此目录下
    assetsPublicPath: '/', //资源根目录

    /**
     * Source Maps
     */

    productionSourceMap: true, //构建生产环境版本是是否开启sourcemap
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, //压缩
    productionGzipExtensions: ['js', 'css'], //使用gzip压缩的扩展名

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report //是否在生成完成后查看包分析
  }
}
