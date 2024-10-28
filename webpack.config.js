const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

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
            directory: path.join(__dirname, 'public'),
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
                test: /\.(js|jsx)$/, // This is for JS/JSX files
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // This is for CSS files
                use: ['style-loader', 'css-loader'], // Apply both style-loader and css-loader
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // Inline files smaller than 8kb
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
};
