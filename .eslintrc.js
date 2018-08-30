module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "globals": {},
    "plugins": ["react"],
    "rules": {
        "semi": 2,
        "no-console": 0,
        "indent": [2, 4],
        "quotes": [2, "single"], //单引号
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "no-undef": 2, //不能有未定义的变量
        "no-use-before-define": 2, //未定义前不能使用
        "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
        "react/no-deprecated": 1, //不使用弃用的方法
        "react/no-direct-mutation-state": 2, //防止this.state的直接变异
        "no-class-assign": 2, //禁止给类赋值
        "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
        "no-const-assign": 2, //禁止修改const声明的变量
        "no-func-assign": 2, //禁止重复的函数声明
        "no-redeclare": 2, //禁止重复声明变量
    }
}
