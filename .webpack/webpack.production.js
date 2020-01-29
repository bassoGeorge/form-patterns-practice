const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

module.exports = env => ({
  plugins: [new CleanWebpackPlugin()]
});
