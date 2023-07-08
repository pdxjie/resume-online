module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 'off',
    'vue/require-v-for-key': 'off',
    "spaced-comment": "off",
    "quotes": "off",
    "camelcase": "off",
    "vue/no-mutating-props": "off",
    "vue/no-setup-props-destructure": "off",
    "vue/valid-v-for": "off",
    "quote-props": "off"
  }
}
