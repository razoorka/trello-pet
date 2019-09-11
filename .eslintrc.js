module.exports = {
	extends: [ 'react-app', 'airbnb', 'prettier', 'eslint:recommended', 'plugin:react/recommended', 'prettier/react' ],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
		'import/no-extraneous-dependencies': 'off'
	},
	plugins: [ 'prettier', 'react' ],
};
