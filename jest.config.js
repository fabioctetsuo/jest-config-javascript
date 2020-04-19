module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 28,
      branches: 18,
      functions: 26,
      lines: 28,
    },
    './src/shared/utils': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    }
  },
  projects: ['./test/jest.client.js', './test/jest.server.js']
}