module.exports = {
  extends: [
    'airbnb-base'
  ],
  plugins: [
    'import'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],
    'max-len': ['error', 120],
    'no-param-reassign': ['error', { 'props': false }],
    'prefer-destructuring': 'off'
  },
};
