/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // TODO transform
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],

  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  resetMocks: true,
};
