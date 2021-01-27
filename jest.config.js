module.exports = {
  // Automatically clear mock calls and instances before every test.
  clearMocks: true,
  modulePathIgnorePatterns: [],
  roots: ["<rootDir>/packages", "<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup-timeout.js"],
  testEnvironment: "node",

  testRegex: "(/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  collectCoverage: true,
  coveragePathIgnorePatterns: ["(test/.*.mock).(jsx?|tsx?)$"],
  coverageDirectory: "<rootDir>/coverage/",

  // Will print all tests
  verbose: true,
};
