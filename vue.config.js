module.exports = {
  configureWebpack: {
    externals: {
      vue: 'Vue'
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}