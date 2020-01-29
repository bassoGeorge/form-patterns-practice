const path = require("path");

const commonSetup = {
  rootDir: path.resolve(__dirname, "../"),
  setupFilesAfterEnv: ["<rootDir>/.jest/jest.test-setup.js"]
};

const allProjects = {
  unit: {
    ...commonSetup,
    displayName: "Unit Tests",
    testRegex: "src/.*\\.spec\\.jsx?$"
  },
  integration: {
    ...commonSetup,
    displayName: "Integration Tests",
    testRegex: "(integrationTests|src)/.*\\.int\\.jsx?$"
  }
};

function buildConfig(projects) {
  return {
    projects: projects.map(function(p) {
      return allProjects[p];
    })
  };
}

module.exports = {
  buildConfig,
  commonSetup
};
