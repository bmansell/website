import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    settings: { react: { version: 'detect' } },
    rules: { 'react/prop-types': 'off' }
  },
  {
    files: ['**/*.test.{js,jsx}'],
    languageOptions: { globals: globals.vitest }
  }
]
