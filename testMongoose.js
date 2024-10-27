const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Trait = require('./models/trait.js').Trait

var trait = new Trait({
    title: "Храбрость",
    nick: "bravery",
})

trait.save();