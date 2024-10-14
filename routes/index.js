var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/justice', function(req, res, next) {
  res.send("<h1>Страница Справедливости</h1>")
 });
 router.get('/patience', function(req, res, next) {
  res.send("<h1>Страница Терпения</h1>")
 });
 router.get('/bravery', function(req, res, next) {
  res.send("<h1>Страница Храбрости</h1>")
 });
module.exports = router;
