const merge = require('webpack-merge');
const release = require('./prod');

module.exports = merge(release, {
    devServer: {
        // host: "0.0.0.0",
        hot: true,
        inline: true,
        port: 8888,
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        open: true,
        proxy: {},
        overlay: {
            errors: true,   // 编译出现错误时，错误直接贴到页面上
        }
    },
    publicPath: '',
    devtool: 'cheap-module-eval-source-map',
    filenameHash: false,    // 生成带hash文件名
});
