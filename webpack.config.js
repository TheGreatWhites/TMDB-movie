const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const compressionPlugin = new CompressionPlugin();

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.min.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true,
							localIdentName: '[local]_[name]_[hash:64]',
							importLoaders: 1
						}
					}
				]
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(eot|woff|woff2|ttf)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [htmlPlugin, compressionPlugin],
	devServer: {
		historyApiFallback: {
			rewrites: [
				{
					from: /\*/,
					to: function() {
						return 'index.html';
					}
				}
			]
		}
	}
};
