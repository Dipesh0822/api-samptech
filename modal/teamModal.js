'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PageTeamSchema = new Schema({
    "title"  :          { type: String },
    "description"    :  { type: String },
    "teams": [{
      "imageSrc":  { type: String },
      "imageAlt":  { type: String },
      "name" : { type: String },
      "jobTitle": { type: String },
      "location": { type: String },
    }]
});
var PageTeams = mongoose.model('pageTeam', PageTeamSchema);
module.exports = PageTeams;
