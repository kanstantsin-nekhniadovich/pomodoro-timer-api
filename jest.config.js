module.exports = {
  preset: 'jest-puppeteer',
  transform: {"\\.ts$": ['ts-jest']},
  setupFiles: [
    "./jest/setEnvVariables.js"
  ],
};
