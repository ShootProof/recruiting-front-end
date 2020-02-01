module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/state-in-constructor': [1, 'never'],
    'react/jsx-one-expression-per-line': [1, { 'allow': 'literal' }],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': false
    }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.ts', '**/*.test.tsx'] }],
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/export': 2,
    'import/default': 2,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }
    ],
    'no-unused-vars': 'off',
    'no-param-reassign': 0,
    'max-len': ['error', {
      code: 130,
      ignoreComments: true,
      ignoreUrls: true,
      tabWidth: 2,
      ignoreRegExpLiterals: true,
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }]
  }
};
