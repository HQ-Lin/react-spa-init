const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const {resolve} = require('./utils');

const DEPLOY_ENV = process.env.DEPLOY_ENV || 'prod';

const config = require(`../config/${DEPLOY_ENV}`);
const webpackBaseConfig = require('./webpack.config.base')(DEPLOY_ENV);

const filenameHash = config.filenameHash;

const webpackConfig = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: filenameHash ? `${config.jsPath}[name].[contenthash].js` : `${config.jsPath}[name].js?[contenthash]`,
        path: resolve('dist'),
        chunkFilename: filenameHash ? `${config.jsPath}[name].[contenthash].js` : `${config.jsPath}[name].js?[contenthash]`, // for the require.ensure
        publicPath: config.publicPath
    },
    performance: {
        hints: 'warning'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: filenameHash ? `${config.cssPath}[name].[contenthash].css` : `${config.cssPath}[name].css?[contenthash]`
        }),
        new OptimizeCSSAssetsPlugin(),
    ]
});

module.exports = webpackConfig;
