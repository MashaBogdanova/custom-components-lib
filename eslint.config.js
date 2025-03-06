import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import * as tseslint from "typescript-eslint";
import globals from "globals";
import js from '@eslint/js';

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      eslintPluginPrettierRecommended,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: '*', next: 'if'},
        {blankLine: 'always', prev: '*', next: 'return'},
      ],
    },
  }
);
