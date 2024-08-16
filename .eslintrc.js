// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  ignorePatterns: [
    "reset-project.js",
    "node_modules",
    "build",
    ".expo-env.d.ts",
    "babel.config.js",
    ".eslintrc.js",
    ".git",
    "expo-env.d.ts",
    "graphql.ts",
    "server",
  ],
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        endOfLine: "auto",
        printWidth: 80,
      },
    ],
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": "error",
  },
};
