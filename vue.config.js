module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=message/,
          loader: require.resolve('./message-loader.js')
        }
      ]
    },
  }
}