'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageResumeSchema = new Schema({
    "name"  :  { type: String },
    "url"    :  { type: String },
    "mobile":  { type: String },
    "email"  :  { type: String },
    "location" : { type: String },
    "createAt" : { type: Date }
});
var PageResume = mongoose.model('pageResume', PageResumeSchema);
module.exports = PageResume;