var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{title:'oms管理系统',username:'admin'});
    // res.redirect('/web/Manage/index.html')
});

module.exports = router;