module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      'multiline': 'never',
      'singleline': 'never'
    }]

    // To Add when eslint-plugin-vue v5 is released
    // 'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 'vue/no-spaces-around-equal-signs-in-attribute': 'error'
  },
  env: {
    browser: true
  }
};
