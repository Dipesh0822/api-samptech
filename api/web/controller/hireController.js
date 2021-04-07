var express = require('express');
var router = express.Router();
var multer = require('multer');
var DB_CONNECT = require('./../../../modal/resumeModal');  // Upload Resume Data
var DB_HIRE = require('./../../../modal/hireModal');  // Upload Resume Data
var ObjectId = require('mongoose').Types.ObjectId;
var fs = require('fs')

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/resume')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toString() + file.originalname)
    }
});

var upload = multer({ storage: storage }).single('imageSrc');

//Contact -- Resume
router.post('/', upload, async (request, response) => {
    try {
        var getLocation = { "location": "https://samptechnologies.com/" };
        var rLocation = getLocation.location;
        var reqName = request.body.name;
        var reqEmail = request.body.email;
        var reqMobile = request.body.mobile;
        var reqFile = request.file.path;
        var createAt = new Date();
        var createResume = new DB_CONNECT({
            name: reqName,
            email: reqEmail,
            mobile: reqMobile,
            url: reqFile,
            location: rLocation,
            createAt: createAt
        });
        createResume.save();
        var data = {
            code: 1,
            data: createResume
        }
        response.json(data);
    } catch (error) {
        var data = {
            code: 0
        }
        response.json(data);
    }
});


//Hire -- Hire
router.get('/', async (request, response) => {
    try {
        var findContact = await DB_HIRE.find({});
        if (findContact != null) {
            var data = {
                code: 1,
                data: findContact
            }
            response.json(data);
        } else {
            var data = {
                code: 0
            }
            response.json(data);
        }
    } catch (error) {
        var data = {
            code: 0
        }
        response.json(data);
    }
});

module.exports = router;