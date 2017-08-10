const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 入口文件
	entry: [
		"./src/index.js",
	], // string | object | array

	// 出口：打包文件
	output: {
		path: path.resolve(__dirname, "dist"), // string
		filename: "bundle.js", // string
	},

	// 模块规则
	module: {
		rules: [{
			enforce: "pre",
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "eslint-loader",
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}],
	},

	// 处理？？？
	resolve: {
		// 用于查找模块的目录
		modules: [
			"node_modules",
			path.resolve(__dirname, "app")
		],

		// 使用的扩展名
		extensions: [".js", ".json", ".jsx", ".css"],

		// 使用别名，可以减少长路径的书写
		alias: {
			"#": "./src",

			"module": "new-module",

			"only-module$": "new-module",

			"module": path.resolve(__dirname, "app/third/module.js"),
		},
	},

	// 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
	// 牺牲了构建速度的 `source-map' 是最详细的。
	devtool: "source-map", // enum

	// webpack 的主目录
	// entry 和 module.rules.loader 选项
	// 相对于此目录解析
	context: __dirname, // string（绝对路径！）

	// 包(bundle)应该运行的环境
	// 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
	target: "web", // 枚举

	// 不要遵循/打包这些模块，而是在运行时从环境中请求他们
	externals: ["react", /^@angular\//],

	// 精确控制要显示的 bundle 信息
	stats: "errors-only",

	// 使用dev server 可以配置类nginx的反向代理，可以做热加载，
	devServer: {
		proxy: {
			'/api': 'http://localhost:3000'
		},
		contentBase: path.join(__dirname, 'example'),
		compress: true,
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		hot: true,
		https: false,
		noInfo: true,
	},

	// 常用的htmlwebpack插件，很方便的以一个html文件为模版嵌入script标签
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}
