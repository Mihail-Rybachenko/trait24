var express = require('express');
var router = express.Router();
var Trait = require('../models/trait').Trait;
var checkAuth = require("../middlewares/checkAuth.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с traits');
});
/* Страница черт характера */
router.get("/:nick", checkAuth, async function(req, res, next) {
  var traits = await Trait.find({nick: req.params.nick});
  console.log(traits)
  if(!traits.length) return next(new Error("Нет такой черты в списке"))
  var trait = traits[0];
  res.render('trait', {
  title: trait.title,
  picture: trait.avatar,
  desc: trait.desc
  })
  });

  
module.exports = router;
