/**
 * Provides css capability, including extraction into single file in production
 * @param env {Object}
 * @param env.mode {String} - production | development
 */
module.exports = ({ mode }) => {
  const commonLoaders = ["css-loader"];

  let additionalConfig = {},
    loaders = [];

  if (mode === "production") {
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    additionalConfig = {
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name]-[chunkhash].css"
        })
      ]
    };

    loaders = [MiniCssExtractPlugin.loader, ...commonLoaders];
  } else {
    loaders = ["style-loader", ...commonLoaders];
  }

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: loaders
        }
      ]
    },
    ...additionalConfig
  };
};
