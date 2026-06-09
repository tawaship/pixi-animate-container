const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-restricted-globals': ['error', {
        name: 'PIXI',
        message: "Do not use the global PIXI namespace. Use named imports from 'pixi.js' instead."
      }],
      'no-restricted-syntax': ['error', {
        selector: 'TSTypeReference > TSQualifiedName[left.name="PIXI"]',
        message: "Do not use the global PIXI namespace in type annotations. Use named imports from 'pixi.js' instead."
      }]
    }
  }
];
