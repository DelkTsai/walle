const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./index.js", // string | object | array

  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string
  },

  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   include: [
      //     path.resolve(__dirname, "app")
      //   ],
      //   exclude: [
      //     path.resolve(__dirname, "app/demo-files")
      //   ],
      //   issuer: { test, include, exclude },
      //   enforce: "pre",
      //   enforce: "post",
      //   loader: "babel-loader",
      //   options: {
      //     presets: ["es2015"]
      //   },
      // },
      // {
      //   test: /\.html$/,
      //   test: "\.html$"
      //   use: [
      //     "htmllint-loader",
      //     {
      //       loader: "html-loader",
      //       options: {
      //       }
      //     }
      //   ]
      // },

    ],
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // 用于查找模块的目录

    extensions: [".js", ".json", ".jsx", ".css"],
    // 使用的扩展名

    alias: {

      "module": "new-module",

      "only-module$": "new-module",

      "module": path.resolve(__dirname, "app/third/module.js"),
    },
  },

  // performance: {
  //   hints: "warning", // 枚举
  //   maxAssetSize: 200000, // 整数类型（以字节为单位）
  //   maxEntrypointSize: 400000, // 整数类型（以字节为单位）
  //   assetFilter: function(assetFilename) {
  //     // 提供资源文件名的断言函数
  //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   }
  // },

  devtool: "source-map", // enum
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。

  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // 枚举
  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)

  externals: ["react", /^@angular\//],
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

  stats: "errors-only",
  // 精确控制要显示的 bundle 信息

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'example'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
