module.exports = {
  coverageReporters: ['json', 'text', 'html'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@functions/(.*)$': '<rootDir>/src/functions/$1',
  }
};