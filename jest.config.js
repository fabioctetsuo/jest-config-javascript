const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    'test',
  ],
  moduleNameMapper: {
    '\\.module\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/test-style-mock.js')
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 32,
      branches: 18,
      functions: 32,
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