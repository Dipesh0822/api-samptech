'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageHireSchema = new Schema({
    "tech"  :  { type: String },
    "exp"    :  { type: String },
    "opening":  { type: String },
    "skill"  :  { type: Schema.Types.Mixed },
    "createAt" : { type: Date },
    "location": { type: String },
    "imageSrc":  { type: String },
});
var PageHire = mongoose.model('pageHire', PageHireSchema);
module.exports = PageHire;