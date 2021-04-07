var express = require('express');
var router = express.Router();
var multer = require('multer');
var DB_CONNECT = require('./../../../modal/resumeModal'); // View Resume Detail
var DB_HIRE = require('./../../../modal/hireModal'); // View Resume Detail
var ObjectId = require('mongoose').Types.ObjectId;
var fs = require('fs');

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/hire')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toString() + file.originalname)
    }
});

var upload = multer({ storage: storage }).single('imageSrc')

//Get Page Detail
router.post('/', async (req, res) => {
    try {
        //Pagination
        var rSkip = parseInt(req.body.pageIndex) * parseInt(req.body.pageSize);
        var rLimit = parseInt(req.body.pageSize);

        var totalCount = 0;
        var listWithdraw;
        var data;

        totalCount = await DB_CONNECT.countDocuments({});
        listWithdraw = await DB_CONNECT.find({}).skip(rSkip).limit(rLimit);

        var data = {
            code: 1,
            data: {
                dataSource: listWithdraw,
                length: totalCount
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

// All Data Save 
router.post('/new', upload, async (req, res) => {
    try {
        var getLocation = { "location": "https://samptechnologies.com/" };
        var rLocation = getLocation.location;
        var rImageSrc = req.file.path;
        var rTech = req.body.tech;
        var rExp = req.body.exp;
        var rOpening = req.body.opening;
        var rSkill = JSON.parse(req.body.skill);
        var insertHire;
        var data;
        insertHire = await new DB_HIRE({
            "location": rLocation,
            "imageSrc": rImageSrc,
            tech: rTech,
            exp: rExp,
            opening: rOpening,
            skill: rSkill,
            createAt: new Date()
        });
        insertHire.save();
        var data = {
            code: 1,
            data: insertHire
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

// update hire data
router.put('/:id', upload, async (req, res) => {
    try {
        var getLocation = { "location": "https://samptechnologies.com/" };
        var rLocation = getLocation.location;
        var rTech = req.body.tech;
        var rExp = req.body.exp;
        var rOpening = req.body.opening;
        var rPrimaryId = req.params.id;
        var rSkill = JSON.parse(req.body.skill);
        var updateHire;
        var data;
        if (req.file == undefined) {
            updateHire = await DB_HIRE.findByIdAndUpdate(rPrimaryId, {
                $set: {
                    tech: rTech,
                    exp: rExp,
                    opening: rOpening,
                    skill: rSkill,
                }
            }, { new: true });
        } else {
            var rImageSrc = req.file.path;
            updateHire = await DB_HIRE.findByIdAndUpdate(rPrimaryId, {
                $set: {
                    tech: rTech,
                    exp: rExp,
                    opening: rOpening,
                    skill: rSkill,
                    imageSrc: rImageSrc,
                    location: rLocation,
                }
            }, { new: true });
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

//Delete Data from hire
router.delete('/:id', async (req, res) => {
    try {
        var reqId = req.params.id;
        var getPath = await DB_CONNECT.findByIdAndDelete(reqId, { url: 1 });
        if (fs.existsSync(getPath.url))
            fs.unlinkSync(getPath.url);
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

//Delete Data from hire
router.delete('/new/:id', async (req, res) => {
    try {
        var reqId = req.params.id;
        var getPath = await DB_HIRE.findByIdAndDelete(reqId, { imageSrc: 1 });
        if (fs.existsSync(getPath.imageSrc))
            fs.unlinkSync(getPath.imageSrc);
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

module.exports = router;