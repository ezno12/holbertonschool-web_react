
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { 
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader', 'image-webpack-loader'],
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8564,
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  devtool: 'inline-source-map',
  mode: 'development'
};