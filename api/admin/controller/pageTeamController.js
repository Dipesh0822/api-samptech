var express = require('express');
var router = express.Router();
var multer = require('multer');
var DB_CONNECT = require('./../../../modal/teamModal');
var ObjectId = require('mongoose').Types.ObjectId;
var fs = require('fs')

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/team')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toString() + file.originalname)
    }
});

var upload = multer({ storage: storage }).single('imageSrc')

//Get Page Detail
router.get('/', async (req, res) => {
    try {
        var findContact = await DB_CONNECT.findOne({}, { title: 1, description: 1 });
        if (findContact != null) {
            var data = {
                code: 1,
                data: findContact
            }
            res.json(data);
        } else {
            var data = {
                code: 0
            }
            res.json(data);
        }
    } catch (error) {
        var data = {
            code: 0
        }
        res.json(data);
    }
});

//Put Data and send email using node js
router.put('/', async (req, res) => {
    try {
        var reqTitle = req.body.title;
        var reqDescription = req.body.description;
        var updateContact = await DB_CONNECT.findOneAndUpdate({}, {
            $set: {
                "title": reqTitle,
                "description": reqDescription
            }
        }, { new: true, upsert: true });
        var data = {
            code: 1,
            data: updateContact
        }
        res.json(data);
    } catch (error) {
        var data = {
            code: 0
        }
        res.json(data);
    }
});


//New Data push in array
router.put('/new', upload, async (req, res) => {
    try {
        var getLocation = { "location": "https://samptechnologies.com/" };
        var rLocation = getLocation.location;
        var rImageAlt = req.body.imageAlt;
        var rName = req.body.name;
        var rJobTitle = req.body.jobTitle;
        if (req.file == undefined) {
            await DB_CONNECT.findOneAndUpdate({}, {
                $push: {
                    "teams": {
                        "imageAlt": rImageAlt,
                        "imageSrc": "",
                        "location": "",
                        "name" : rName,
                        "jobTitle": rJobTitle
                    }
                }
            }, { new: true, upsert: true });
        } else {
            var rImageSrc = req.file.path;
            await DB_CONNECT.findOneAndUpdate({}, {
                $push: {
                    "teams": {
                        "imageAlt": rImageAlt,
                        "imageSrc": rImageSrc,
                        "location": rLocation,
                        "name" : rName,
                        "jobTitle": rJobTitle
                    }
                }
            }, { new: true, upsert: true });
        }
        var data = {
            code: 1
        }
        res.json(data);
    } catch (error) {
        console.log(error);
        var data = {
            code: 0
        }
        res.json(data);
    }
});


//All Table Display User
router.post('/', async (req, res) => {
    try {

        //Pagination
        var rSkip = parseInt(req.body.pageIndex) * parseInt(req.body.pageSize);
        var rLimit = parseInt(req.body.pageSize);

        var totalCount = 0;
        var listWithdraw;
        var data;

        totalCount = await DB_CONNECT.findOne({}, { teams: 1, _id: 0 });
        listWithdraw = await DB_CONNECT.findOne({}, { teams: { $slice: [rSkip, rLimit] }, _id: 0, description: 0, title: 0, __v: 0 })

        if (listWithdraw != null) {
            var data = {
                code: 1,
                data: {
                    dataSource: listWithdraw.teams,
                    length: totalCount.teams.length
                }
            }
            res.json(data);    
        } else {
            var data = {
                code: 0
            }
            res.json(data);
        }
    } catch (error) {
        console.log(error)
        var data = {
            code: 0
        }
        res.json(data);
    }
});

//Put Data Service List and success message
router.put('/new/:id', upload, async (req, res) => {
    try {
        var reqId = req.params.id;
        var getLocation = { "location": "https://samptechnologies.com/" };
        var rLocation = getLocation.location;
        var rImageAlt = req.body.imageAlt;
        var rName = req.body.name;
        var rJobTitle = req.body.jobTitle;
            
        var updateData;
        _redis_client.get("team", async (err, teams) => {
            if (req.file == undefined) {
                updateData = await DB_CONNECT.findOneAndUpdate({ "teams._id": new ObjectId(reqId) },
                    {
                        $set: {
                            "teams.$.imageAlt": rImageAlt,
                            "teams.$.name" : rName,
                            "teams.$.jobTitle": rJobTitle
                        }
                    }, { _id: 0 });
                   
            } else {
                var rImageSrc = req.file.path;
                var getPath = await DB_CONNECT.findOne({ "teams._id": new ObjectId(reqId) }, { "teams.$": 1, _id: 0 })
                fs.unlinkSync(getPath.teams[0].imageSrc);
                updateData = await DB_CONNECT.findOneAndUpdate({ "teams._id": new ObjectId(reqId) },
                    {
                        $set: {
                            "teams.$.imageAlt": rImageAlt,
                            "teams.$.imageSrc": rImageSrc,
                            "teams.$.location": rLocation,
                            "teams.$.name" : rName,
                            "teams.$.jobTitle": rJobTitle
                        }
                    }, { _id: 0 });
            }
            var data = {
                code: 1,
                data: updateData
            }
            res.json(data);
        })
    } catch (error) {
        console.log(error);
        var data = {
            code: 0
        }
        res.json(data);
    }
})

//Delete Data from array
router.delete('/:id', async (req, res) => {
    try {
        var reqId = req.params.id;
        var getPath = await DB_CONNECT.findOne({ "teams._id": new ObjectId(reqId) }, { "teams.$": 1, _id: 0 })
        var updateData = await DB_CONNECT.update({}, { $pull: { "teams": { "_id": new ObjectId(reqId) } } });
        fs.unlinkSync(getPath.teams[0].imageSrc);
        var data = {
            code: 1,
            data: updateData
        }
        res.json(data);
    } catch (error) {
        console.log(error);
        var data = {
            code: 0
        }
        res.json(data);
    }
});


module.exports = router;
