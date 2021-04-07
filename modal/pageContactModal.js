'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageSchema = new Schema({
    "title"  :  { type: String },
    "url"    :  { type: String },
    "address":  { type: String },
    "email"  :  { type: String },
    "phone"  :  { type: String }
});
var PageContact = mongoose.model('pageContact', PageSchema);
module.exports = PageContact;