'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageServicesSchema = new Schema({
    "title"  :          { type: String },
    "description"    :  { type: String },
    "services": [{
      "location": { type: String },
      "imageSrc":  { type: String },
      "imageAlt":  { type: String },
      "imageName":  { type: String },
      "title":  { type: String },
      "description":  { type: String }
    }]
});
var PageServices = mongoose.model('pageService', PageServicesSchema);
module.exports = PageServices;


//       "location": { type: String },
//       "imageSrc":  { type: String },
//       "imageAlt":  { type: String },
//       "imageName" : { type: String },