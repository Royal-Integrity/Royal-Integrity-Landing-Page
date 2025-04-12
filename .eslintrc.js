module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    '@nuxtjs/eslint-config',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
  settings: {
    'import/core-modules': ['vue'],
  },
};
