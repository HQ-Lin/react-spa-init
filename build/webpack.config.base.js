const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const {resolve} = require('./utils');

const webpackBaseConfig = function (DEPLOY_ENV = 'prod') {
    const config = require('../config')(DEPLOY_ENV);

    const webpackConfig = {
        // 定义入口文件
        entry: {
            app: resolve('src/App.jsx')
        },
        resolve: config.resolve,
        devtool: config.devtool,
        module: {
            // 定义loader
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|webp|svg)$/,
                    loader: 'url-loader',
                    query: {
                        limit: 8192,
                        publicPath: config.publicPath,
                        outputPath: config.imgPath,
                        useRelativePath: false,
                        name: config.filenameHash ? '[name].[hash].[ext]' : '[name].[ext]?[hash]'
                    }
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    loader: 'url-loader',
                    query: {
                        limit: 8192,
                        publicPath: config.publicPath,
                        outputPath: 'fonts/',
                        useRelativePath: false,
                        name: config.filenameHash ? '[name].[hash].[ext]' : '[name].[ext]?[hash]'
                    }
                },
            ]
        },
        // 添加插件
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: resolve('public/index.html'),
                favicon: resolve('public/favicon.ico'),
            }),
            new SWPrecacheWebpackPlugin(config.swConfig),
        ],

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: "initial",
                        minChunks: 2,
                        maxInitialRequests: 5, // The default limit is too small to showcase the effect
                        minSize: 0 // This is example is too small to create commons chunks
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: "initial",
                        name: "vendor",
                        priority: 10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: {
                name: 'runtime',
            }
        }
    };

    if (config.eslint) {
        webpackConfig.module.rules.unshift({
            test: /\.jsx?$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
        });
    }

    return webpackConfig;
};

module.exports = webpackBaseConfig;
