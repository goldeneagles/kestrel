const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
	entry: './client/main.jsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, "client")
				],
				loader: "babel-loader",
				options: {
					presets: ["env", "react"]
				}
			}
		]
	},
	plugins: [new HtmlWebpackPlugin(), new WebpackCleanupPlugin()],
	resolve: {
		extensions: [".js", ".jsx"]
	}
};
