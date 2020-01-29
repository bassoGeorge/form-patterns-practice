const CompressionWebpackPlugin = require("compression-webpack-plugin");

/**
 * Adds support for compression. These files will not be referred by htmlWebpackPlugin, rather, the webserver
 * should be configured to serve the gzipped version when requested for .js
 */
module.exports = env => ({
  plugins: [new CompressionWebpackPlugin()]
});
