const merge = require('webpack-merge');

const {resolve} = require('./utils');

const config = require('../config/dev');
const webpackBaseConfig = require('./webpack.config.base')('dev');

const filenameHash = config.filenameHash;

const webpackConfig = merge(webpackBaseConfig, {
    mode: 'development',
    output: {
        filename: filenameHash ? `${config.jsPath}[name].[hash].js` : `${config.jsPath}[name].js?[hash]`,
        path: resolve('dist'),
        publicPath: config.publicPath,
        chunkFilename: filenameHash ? `${config.jsPath}[name].[hash].js` : `${config.jsPath}[name].js?[hash]`, // for the require.ensure
    },
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
    devServer: config.devServer
});

module.exports = webpackConfig;
