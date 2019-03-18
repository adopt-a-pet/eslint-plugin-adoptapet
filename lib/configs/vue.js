module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never',
      singleline: 'never',
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-restricted-syntax': ['error', 'VElement > VExpressionContainer CallExpression'],
  },
  env: {
    browser: true,
  },
};
