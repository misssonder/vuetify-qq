module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: './',
  assetsDir: "static",
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer: {
    proxy: "http://localhost:9999"
  }
}
