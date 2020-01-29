const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    })
  ]
});
