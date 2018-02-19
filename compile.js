const path = require('path');
const webpack = require("webpack");
const ngToolsWebpack = require('@ngtools/webpack');


const compiler = webpack({
	watch: true,
	entry: './src/main/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.ts'],
		alias: {
			'shared': path.resolve(__dirname, 'src/shared'),
		},
		modules: ['node_modules'],
	},
	plugins: [
		new ngToolsWebpack.AngularCompilerPlugin({
			tsConfigPath: path.resolve(__dirname, 'src/tsconfig.json'),
			entryModule: path.resolve(__dirname, 'src/main/app/app.module#AppModule'),
			skipCodeGeneration: true,
		}),
	],
	module: {
		rules: [
			{ test: /\.html$/, use: [
				{ loader: 'raw-loader' },
			]},
			{
				test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
				exclude: [/node_modules/, /\.spec\.(js|ts)$/],
				loader: '@ngtools/webpack',
			},
		]
	},

});
compiler.watch({
	poll: 1000
}, function(err, stats) {
	console.error(stats.toString({
		normal: true,
		colors: true
	}));
});
