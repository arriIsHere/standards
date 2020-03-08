module.exports = {
	"parser": "babel-eslint",
	"rules": {
		"indent": ["error", "tab"],
		"curly": ["error", "all"],
		"padding-line-between-statements": [
			"error",
			// Blank line after declarations
			{
				"blankLine": "always",
				"prev": [
					"const",
					"let"
				],
				"next": "*"
			},

			// Multiple variable declarations should be grouped.
			{
				"blankLine": "never",
				"prev": [
					"singleline-const",
					"singleline-let"
				],
				"next": [
					"singleline-const",
					"singleline-let"
				]
			},

			// Multilines should have space before/after
			{
				"blankLine": "always",
				"prev": [
					"*"
				],
				"next": [
					"multiline-let",
					"multiline-const",
					"multiline-expression",
					"multiline-block-like"
				]
			},
			{
				"blankLine": "always",
				"prev": [
					"multiline-let",
					"multiline-const",
					"multiline-expression",
					"multiline-block-like"
				],
				"next": "*"
			},

			// Space before function and class declarations
			{
				"blankLine": "always", 
				"prev": [
					"class",
					"function"
				], 
				"next": [
					"*"
				]
			}
		]
	}
}