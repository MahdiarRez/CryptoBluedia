// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'next'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:next/recommended',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    // TypeScript rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',

    // React rules
    'react/jsx-key': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',

    // Next.js rules
    'next/no-html-link-for-pages': 'error',
    'next/no-img-element': 'warn',

    // General code quality
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'no-console': 'warn',

    // Formatting (these can be adjusted based on your preferences)
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    // JSX-specific
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'react/jsx-wrap-multilines': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: __dirname,
    },
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    '.next',
    'out',
    'next.config.js',
    '**/*.d.ts',
  ],
};
