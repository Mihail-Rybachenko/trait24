const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.uni = function(){
    console.log(this.name + " мне помогла стать лучше")
    }

const Trait = mongoose.model('Trait', schema);
const character = new Trait({ name: 'Решительность' });
character.save().then(() => character.uni());