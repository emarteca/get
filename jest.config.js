const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', path.resolve(__dirname, 'lib')],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '.',
        outputName: 'junit-unit-tests.xml',
      },
    ],
  ],
  setupFiles: ['<rootDir>/unit-error-hack.js']
};
