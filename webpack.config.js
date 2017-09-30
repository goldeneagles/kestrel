const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const HWPAbsolute = function() {};
HWPAbsolute.prototype.apply = function(compiler) {
	console.log("compiler");
	compiler.plugin('compilation', function(compilation) {
		compilation.plugin('html-webpack-plugin-before-html-generation', function(hwp, callback) {
			console.log("plug");
			console.log(hwp);
			hwp.assets.js = hwp.assets.js.map(name => "/"+name);
			callback(null, hwp);
		});
	});
};

module.exports = {
	entry: './client/main.jsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[chunkhash].js"
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
	plugins: [new HtmlWebpackPlugin(), new WebpackCleanupPlugin(), new HWPAbsolute()],
	resolve: {
		extensions: [".js", ".jsx"]
	}
};
