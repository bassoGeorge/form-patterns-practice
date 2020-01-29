const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const absProjectPath = process.cwd();
const projectPath = subPath => path.resolve(absProjectPath, subPath);

module.exports = ({ mode }) => ({
  entry: {
    main: projectPath("./src/index.js")
  },
  output: {
    path: projectPath("./build"),
    filename: mode === "production" ? "[name]-[chunkhash].js" : "[name].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      // app: path.resolve(process.cwd(), './src') // add shortcuts for paths like this
    }
  },
  plugins: [
    new CopyPlugin([
      {
        from: projectPath("./src/public")
      }
    ])
  ],
  mode: mode,
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1
        }
      }
    }
  }
});
