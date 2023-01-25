module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: ['react-app', 'prettier'],
  plugins: ['import', 'prettier'],
  env: { browser: true, es2021: true },
  rules: {
    'import/no-anonymous-default-export': ['off', { allowObject: true }],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },
          { pattern: 'components/**', group: 'internal' },
          { pattern: 'constants/**', group: 'internal' },
          { pattern: 'intl/**', group: 'internal' },
          { pattern: 'modules/**', group: 'internal' },
          { pattern: 'types/**', group: 'internal' },
          { pattern: 'utils/**', group: 'internal' },
          { pattern: 'widgets/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react/jsx-no-target-blank': 'off',
    'prettier/prettier': 'error',
  },
  settings: { 'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } } },
};
