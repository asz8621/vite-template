/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    semi: ['error', 'never'], // 關閉分號
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
