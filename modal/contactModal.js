'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    answer: { type: String },
    isAnswer: { type: Boolean, default: false },
    createAt: { type: Date },
    updateAt: { type: Date }
});
var Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;