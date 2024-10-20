const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, './index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    devServer: {
        port: '5004',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};