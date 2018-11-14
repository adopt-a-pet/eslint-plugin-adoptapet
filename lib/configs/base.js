module.exports = {
  root: true,
  extends: [
    'airbnb-base'
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
