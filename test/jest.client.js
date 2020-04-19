// const path = require('path');

module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      functions: 29,
      lines: 34,
    },
    './src/shared/utils': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    }
  },
}