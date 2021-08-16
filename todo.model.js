const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    name: { type: String },
    address: { type: String },
    email: { type: String },
    contact: { type: String },
}, { versionKey: false });

var model = mongoose.model('Todo', Todo)

module.exports = model;
