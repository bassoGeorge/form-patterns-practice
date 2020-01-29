const webpackMerge = require("webpack-merge");

module.exports = env => {
  const { presets } = env;
  const allConfigs = []
    .concat(...[presets]) // flattening technique
    .map(name => require(`./presets/webpack.preset.${name}`)(env));

  return webpackMerge({}, ...allConfigs);
};
