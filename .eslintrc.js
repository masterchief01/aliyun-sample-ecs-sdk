module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'eslint-config-prettier',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	plugins: ['simple-import-sort'],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	rules: {
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-parameter-properties': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'simple-import-sort/imports': 'error',
	},
};
