var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var compression = require('compression')
var app = express();
var cors = require('cors');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression())
app.use('/public',express.static(__dirname + './../public/'));
// Point static path to dist
app.use(express.static(path.join(__dirname, './../dist/')));
// Point static path to admin
// app.use('/admin', express.static(path.join(__dirname, './../admin/')));

module.exports = app;