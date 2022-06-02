const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    target: 'web',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(), // usuwa niepotrzebne pliki
        new HtmlWebpackPlugin({
            title: 'new app',
            template: 'src/Templates/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            { useBuiltIns: 'usage', corejs: '3.0.0' },
                        ],
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            },
        ],
    },
};