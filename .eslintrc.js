module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
    jest: {
      version: require("jest/package.json").version,
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
  },
};
