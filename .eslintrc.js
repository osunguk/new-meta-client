module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "airbnb",
    "airbnb/hooks",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-shadow": 0,
    "linebreak-style": ["error", "unix"],
    "no-return-await": 0,
    "class-methods-use-this": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "no-console": "off",
    "click-events-have-key-events": "off",
    "max-classes-per-file": "off",
    "no-use-before-define": "off",
    "react-hooks/rules-of-hooks": "warn",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
