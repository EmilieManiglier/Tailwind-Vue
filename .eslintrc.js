module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": ["error", 120],
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: [2, "single"],
    "linebreak-style": [2, "unix"],
    semi: [2, "always"],
    "space-in-parens": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "off",
      {
        anonymous: "always",
        named: "always",
        asyncArrow: "ignore"
      }
    ],
    "keyword-spacing": ["error", { before: true }],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "no-empty-function": ["error", { allow: ["methods", "constructors"] }],
    camelcase: [0, { properties: "never" }],
    "comma-dangle": ["error", "never"]
  }
};
