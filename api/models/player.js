const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Player = new Schema({
    name: {type: String},
    score: {type: Number}
}, {collection: 'Players'});

module.exports = mongoose.model('Player', Player);