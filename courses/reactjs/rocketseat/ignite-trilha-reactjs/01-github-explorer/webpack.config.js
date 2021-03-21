const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.jsx'), // Qual arquivo principal da aplicação
	output: { // Qual arquivo será gerado pelo webpack
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
    hot: true,
	},
	plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	].filter(Boolean), // Hack para filtrar/remover o que são valores booleanos 
	module: { // Regras de tratamento dependendo do tipo do arquivo
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		],
	}
}