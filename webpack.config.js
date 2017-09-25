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
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			},
			{
				test: /\.jsx?$/,
					include: [
						path.resolve(__dirname, "client")
					],
					loader: "babel-loader",
					options: {
						presets: ["env", "react"]
					}
			},
			{
				test: /\.css$/g,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [new HtmlWebpackPlugin(), new WebpackCleanupPlugin()],
	resolve: {
		extensions: [".js", ".jsx"]
	}
};
