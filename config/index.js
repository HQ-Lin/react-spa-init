const path = require('path');
const merge = require('webpack-merge');
const swConfig = require('./sw-config');

module.exports = function config (DEPLOY_ENV = 'dev') {
    return merge({
        resolve: {
            swConfig,
            extensions: ['.js','.jsx','.scss','.json'], // 自动补充后缀
            alias: {    // 定义路径别名
                '@': path.resolve(__dirname, '../src/'),
                '@api': path.resolve(__dirname, '../src/api'),
                '@assets': path.resolve(__dirname, '../src/assets'),
                '@components': path.resolve(__dirname, '../src/components'),
            }
        },
    }, require(path.join(__dirname, DEPLOY_ENV)));
}
