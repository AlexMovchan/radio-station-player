module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    semi: ['error', 'always'],
  },
};
