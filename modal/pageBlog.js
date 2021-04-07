'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageBlogSchema = new Schema({
    "location": { type: String },
    "imageSrc":  { type: String },
    "imageAlt":  { type: String },
    "blogtitle"    :  { type: String },
    "authorname":  { type: String },
    "date"  :  { type: Date },
    "shortDesc"  :  { type: String }, 
    "view" : { type: Number, default: 0},
    "detailSrc" : { type: String },
    "title" : { type: String },
    "metatags": {type: Schema.Types.Mixed},
    "canonical" : { type: String },
    "authordesc" : { type: String },
    "authorSrc" : { type: String },
});
var PageBlog = mongoose.model('pageBlog', PageBlogSchema);
module.exports = PageBlog;