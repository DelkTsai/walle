## Walle: 类VUE的前端框架，施工中，欢迎加入....

[![Build Status](https://travis-ci.org/zhentaoo/walle.svg?branch=master)](https://travis-ci.org/zhentaoo/walle)

### Feature
1. render函数
2. 指令解析
3. 双向绑定
4. 虚拟dom
5. 组件嵌套

### Webpack: 集成配置，构建打包，本地开发－热加载，Babel ES6+
- npm i webpack webpack-dev-server
- npm install --save-dev html-webpack-plugin
- npm install --save-dev babel-loader babel-core babel-preset-env
- Webpack DOC: https://doc.webpack-china.org/configuration/
- HtmlWebpackPlugin DOC: https://github.com/jantimon/html-webpack-plugin#configuration
- Babel DOC: http://babeljs.io/docs/setup/#installation
- 在根目录下添加 webpack.config.js .babelrc文件，再进行webpack plugin配置

### .editorconfig: 统一代码风格，排版
- DOC: http://editorconfig.org/
- 在根目录添加 .editorconfig 文件即可

### eslint: JS代码规范校验，语法
- DOC: http://eslint.cn/docs/user-guide/configuring
- eslint集成webpack: http://www.cnblogs.com/le0zh/p/5619350.html

### travis: 持续集成
- DOC: https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
- https://travis-ci.org/zhentaoo/walle
