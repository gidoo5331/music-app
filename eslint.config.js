const { ESLint } = require('eslint')
const parser = require('@typescript-eslint/parser')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const reactPlugin = require('eslint-plugin-react')
const reactNativePlugin = require('eslint-plugin-react-native')
const importPlugin = require('eslint-plugin-import')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')
const prettierPlugin = require('eslint-plugin-prettier')

module.exports = [
	{
		ignores: ['node_modules/', 'dist/', 'build/', 'android/', 'ios/'],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			parser,
		},
		plugins: {
			'@typescript-eslint': typescriptPlugin,
			react: reactPlugin,
			'react-native': reactNativePlugin,
			import: importPlugin,
			'jsx-a11y': jsxA11yPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			//   'prettier/prettier': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react-native/no-inline-styles': 'off',
			'react-native/no-raw-text': [
				'error',
				{
					skip: ['CustomText', 'AnotherCustomText'],
				},
			],
			'react/prop-types': 'off', // Using TypeScript for type checking
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
	},
]
