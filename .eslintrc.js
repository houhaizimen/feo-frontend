module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'standard-with-typescript', 'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    // parser: 'babel-eslint'
    project: './tsconfig.json'
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
