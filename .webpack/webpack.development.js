const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = env => ({
  devServer: {
    stats: "errors-only",
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true,
    overlay: true
  },
  plugins: [new DashboardPlugin()]
});
