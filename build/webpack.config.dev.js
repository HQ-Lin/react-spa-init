const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('../config/dev');
const webpackBaseConfig = require('./webpack.config.base')('dev');

const webpackConfig = merge(webpackBaseConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?sourceMap'},
                    {loader: 'postcss-loader?sourceMap'},
                    {loader: 'sass-loader?sourceMap'},
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: config.devServer
});

module.exports = webpackConfig;
