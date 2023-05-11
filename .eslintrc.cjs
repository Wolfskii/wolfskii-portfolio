module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs', 'commented out code.sonarlint(typescript:S125)'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'no-tabs': 'off'
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	rules: {
		'no-console': 1,
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		camelcase: 'off',
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'default',
				format: ['camelCase']
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE']
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'forbid'
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'forbid'
			},
			{
				selector: 'enumMember',
				format: ['PascalCase']
			},
			{
				selector: 'typeLike',
				format: ['PascalCase']
			}
		],
		'max-len': [
			'warn',
			{
				code: 160,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: ['function', 'class', 'return'] },
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'never', prev: 'import', next: 'import' },
			{ blankLine: 'always', prev: ['function', 'class'], next: '*' }
		],
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'spaced-comment': ['warn', 'always'],
		semi: ['warn', 'never'],
		quotes: ['warn', 'single']
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
}
