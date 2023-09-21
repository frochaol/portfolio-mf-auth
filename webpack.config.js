const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
	name: 'mfAuthentication',

	exposes: {
		'./AuthModule': './src/app/modules/auth/auth.module.ts'
	},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
	}
});
