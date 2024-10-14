var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/justice', function(req, res, next) {
  res.render('trait', {
    title: "Справедливость",
    picture: "images/justice.webp",
    desc: "это черта характера, которое отражает идею об отношении к людям и ситуациям справедливо и согласно закону или моральным нормам."
    });
    });
router.get('/bravery', function(req, res, next) {
res.render('trait', {
title: "Храбрость",
picture: "images/bravery.webp",
desc: "Способность не бояться или преодолевать страх"
});
 });
router.get('/Patience', function(req, res, next) {
res.render('trait', {
title: "Терпение",
picture: "images/Patience.webp",
desc: "это способность выносить дискомфорт, физическое и психоэмоциональное напряжение, боль и прочие неудобства, не жалуясь и не противодействуя им."
});
});
module.exports = router;
