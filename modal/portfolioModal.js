'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PagePortfolioSchema = new Schema({
    "title"  :          { type: String },
    "description"    :  { type: String },
    "portfolios": [{
      "location": { type: String },
      "imageSrc":  { type: String },
      "imageAlt":  { type: String },
      "imageName" : { type: String },
      "type": { type: String }, //Web, Game, App
      "linkPlaystore" : { type: String },
      "linkName" : { type: String },
    }]
});
var PagePortfolio = mongoose.model('pagePortfolio', PagePortfolioSchema);
module.exports = PagePortfolio;


