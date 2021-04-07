'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageAboutSchema = new Schema({
    "title"  :  { type: String },
    "description" :  { type: String },
    "innerHtml"  :  { type: Schema.Types.Mixed }
});
var PageAbout = mongoose.model('pageAbout', PageAboutSchema);
module.exports = PageAbout;