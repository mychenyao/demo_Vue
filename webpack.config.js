var htmlwp = require("html-webpack-plugin");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bulid.js"
    },
    module: {
        loaders: [{
                test: /\.css$/, //打包 .css文件
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf|svg)$/, //打包 url请求的资源文件
                loader: 'url-loader?limit=20000' //limit表示图片的大小为20K是临界值，小于20K的图片均被打包到build.js中去，请求图片就会很快
            },
            {
                test: /\.js$/, // 将.js文件中的es6语法转成es5语法
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.vue$/, // 解析 .vue 组件页面文件
                loader: 'vue-loader' //
            }
        ]
    },
    babel: {
        presets: ['es2015'], // 配置将es6语法转换成es5语法
        plugins: ['transform-runtime']
    },
    plugins: [
        new htmlwp({
            title: "首页",
            filename: "index.html",
            template: "template.html"
        })
    ]
};