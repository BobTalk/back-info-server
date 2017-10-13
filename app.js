var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var routes = require('./routes/index')
var app = express();
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))
// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
/*指定页面模板格式*/
app.set('view engine', 'ejs');
app.use('/', routes)
//设置跨域访问接口，放到页面声明之后
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
module.exports = app;