var express = require('express');
var router = express.Router();
var multer = require('multer');
var DB_CONNECT = require('./../../../modal/clientModal');
var ObjectId = require('mongoose').Types.ObjectId;
var fs = require('fs')

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/client')
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
        var rClientname = req.body.clientname;
        var rReview = req.body.review;
     
        if (req.file == undefined) {
            await DB_CONNECT.findOneAndUpdate({}, {
                $push: {
                    "clients": {
                        "imageAlt": rImageAlt,
                        "imageSrc": "",
                        "location": "",
                        "clientname": rClientname,
                        "review": rReview
                    }
                }
            }, { new: true, upsert: true });
        } else {
            var rImageSrc = req.file.path;
            await DB_CONNECT.findOneAndUpdate({}, {
                $push: {
                    "clients": {
                        "imageAlt": rImageAlt,
                        "imageSrc": rImageSrc,
                        "location": rLocation,
                        "clientname": rClientname,
                        "review": rReview
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

        totalCount = await DB_CONNECT.findOne({}, { clients: 1, _id: 0 });
        listWithdraw = await DB_CONNECT.findOne({}, { clients: { $slice: [rSkip, rLimit] }, _id: 0, description: 0, title: 0, __v: 0 })

        var data = {
            code: 1,
            data: {
                dataSource: listWithdraw.clients,
                length: totalCount.clients.length
            }
        }
        res.json(data);

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
        var rClientname = req.body.clientname;
        var rReview = req.body.review;
        var updateData;
        if (req.file == undefined) {
            updateData = await DB_CONNECT.findOneAndUpdate({ "clients._id": new ObjectId(reqId) },
                {
                    $set: {
                        "clients.$.imageAlt": rImageAlt,
                        "clients.$.clientname": rClientname,
                        "clients.$.review": rReview
                    }
                }, { _id: 0 });
        } else {
            var rImageSrc = req.file.path;
            var getPath = await DB_CONNECT.findOne({ "clients._id": new ObjectId(reqId) }, { "clients.$": 1, _id: 0 })
            if(fs.existsSync(getPath.clients[0].imageSrc)) {
                fs.unlinkSync(getPath.clients[0].imageSrc);
            }
            
            updateData = await DB_CONNECT.findOneAndUpdate({ "clients._id": new ObjectId(reqId) },
                {
                    $set: {
                        "clients.$.imageAlt": rImageAlt,
                        "clients.$.imageSrc": rImageSrc,
                        "clients.$.location": rLocation,
                        "clients.$.clientname": rClientname,
                        "clients.$.review": rReview
                    }
                }, { _id: 0 });
        }
        var data = {
            code: 1,
            data: updateData
        }
        res.json(data);
    } catch (error) {
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
        var getPath = await DB_CONNECT.findOne({ "clients._id": new ObjectId(reqId) }, { "clients.$": 1, _id: 0 })
        var updateData = await DB_CONNECT.update({}, { $pull: { "clients": { "_id": new ObjectId(reqId) } } });
        if(fs.existsSync(getPath.clients[0].imageSrc)) {
            fs.unlinkSync(getPath.clients[0].imageSrc);
        }
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
})


module.exports = router;
