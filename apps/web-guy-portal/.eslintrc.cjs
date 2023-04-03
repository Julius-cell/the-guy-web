module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint-config-prettier',
  ],
  // Specifying Parser
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname
  },
  // Configuring third-party plugins
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  // Resolve imports
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json"
      }
    },
    react: {
      version: "18.x"
    }
  },
  rules: {
    "linebreak-style": "off",
    // Disallow the `any` type.
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "off",
    // Enforce the use of the shorthand syntax.
    "object-shorthand": "error",
    "no-console": "warn"
  }
}
