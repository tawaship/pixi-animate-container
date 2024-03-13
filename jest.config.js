/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  testMatch: [
    "**/test/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

module.exports = config;
