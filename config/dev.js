module.exports = {
    devServer: {
        host: '0.0.0.0',
        inline: true,
        hot: true,
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
    devtool: 'cheap-module-eval-source-map',
    filenameHash: false,    // 生成带hash文件名
};
