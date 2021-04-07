'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageClientsSchema = new Schema({
    "title"  :          { type: String },
    "description"    :  { type: String },
    "clients": [{
      "imageSrc":  { type: String },
      "imageAlt":  { type: String },
      "location":  { type: String },
      "clientname": { type: String },
      "review": { type: String },
    }]
});
var PageClients = mongoose.model('pageClient', PageClientsSchema);
module.exports = PageClients;


