var mongoose     = require('mongoose');
var  Schema          = mongoose.Schema;

//define person mongoose schema
var PersonSchema   = new Schema({
    name   : { type: String, required: true }
    , email   : { type: String, required: true }
    , age     : { type: Number, min: 5, max: 100 }
});

module.exports = mongoose.model('Person', PersonSchema);