## Walle: 类VUE的前端框架，施工中，欢迎加入....

[![Build Status](https://travis-ci.org/zhentaoo/walle.svg?branch=master)](https://travis-ci.org/zhentaoo/walle)

### Feature
1. render函数
2. 指令解析
3. 双向绑定
4. 虚拟dom
5. 组件嵌套

### Webpack Step By Step
1. 安装weback
  - npm install --save-dev webpack webpack-dev-server
  - DOC: https://doc.webpack-china.org/configuration/

2. 安装html-webpack-plugin
  - npm install --save-dev html-webpack-plugin
  - DOC: https://github.com/jantimon/html-webpack-plugin#configuration

3. 集成babel
  - npm install --save-dev babel-loader babel-core babel-preset-env
  - DOC: http://babeljs.io/docs/setup/#installation

4. 集成eslint
  - npm install --save-dev eslint eslint-loader
  - DOC: http://eslint.cn/docs/user-guide/configuring
  - webpack集成eslint: http://www.cnblogs.com/le0zh/p/5619350.html


### editorconfig: 统一代码风格，排版
- DOC: http://editorconfig.org/
- 在根目录添加 .editorconfig 文件即可


### travis: 持续集成
- DOC: https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
- https://travis-ci.org/zhentaoo/walle
