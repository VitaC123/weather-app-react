var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.svg$/, use: 'file-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })],
    node: {
        fs: 'empty'
    }
};