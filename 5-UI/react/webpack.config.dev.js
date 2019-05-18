const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'cheap-module-source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: {"Access-Control-Allow-Orgin": "*"},
        https: false
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};