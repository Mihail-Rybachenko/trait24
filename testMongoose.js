const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Trait = mongoose.model('Trait', { name: String });
const character = new Trait({ name: 'Решительность' });
character.save().then(() => console.log('Frisk'));