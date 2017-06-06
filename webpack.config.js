var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ["babel-polyfill", './index.jsx'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	devtool: 'cheap-module-eval-source-map',

	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true,
		contentBase: "./"
	},
	plugins:[new webpack.HotModuleReplacementPlugin()],
	
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "es2016","es2017", "react", "stage-0"]
				}
			}
		]
	}
};