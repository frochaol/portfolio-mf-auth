const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({
	name: 'mfAuthentication',

	exposes: {
		'./LoginModule': './src/app/login/login.module.ts'
	},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
	}
});
moduleFederationConfig.output.publicPath = 'http://localhost:4201/';
module.exports = moduleFederationConfig;
