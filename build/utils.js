const path = require('path');

exports.resolve = function resolve (...args) {
    return path.join(__dirname, '..', ...args);
};

/* eslint-disable */
exports.releaseDone = () => {
    console.log(`
    　　　　　　　　┏┓　　　┏┓+ +
    　　　　　　　┏┛┻━━━┛┻┓ + +
    　　　　　　　┃　　　　　　　┃ 　
    　　　　　　　┃　　　━　　　┃ ++ + + +
    　　　　　　 ████━████ ┃+
    　　　　　　　┃　　　　　　　┃ +
    　　　　　　　┃　　　┻　　　┃
    　　　　　　　┃　　　　　　　┃ + +
    　　　　　　　┗━┓　　　┏━┛
    　　　　　　　　　┃　　　┃　　　　　　　　　　　
    　　　　　　　　　┃　　　┃ + + + +
    　　　　　　　　　┃　　　┃　　　　　　　　
    　　　　　　　　　┃　　　┃ +
    　　　　　　　　　┃　　　┃
    　　　　　　　　　┃　　　┃　　+　　　　　　　　　
    　　　　　　　　　┃ 　　　　　　　┣┓
    　　　　　　　　　┃ 　　　　　　　┏┛
    　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
    　　　　　　　　　　┃┫┫　┃┫┫
    　　　　　　　　　　┗┻┛　┗┻┛+ + + +
        Code is far away from bug with the animal protecting　　　
    `);
};
