var express = require('express');
var router = express.Router();
var DB_CONNECT = require('./../../../modal/pageAboutUs');
var ObjectId = require('mongoose').Types.ObjectId;

//Get Page Detail
router.get('/', async (req, res) => {
    try {
        _redis_client.get("about", async (err, abouts) => {
            // If that key exists in Redis store
            if (abouts) {
                res.json(JSON.parse(abouts));
            } else {
                var findContact = await DB_CONNECT.findOne();
                if (findContact != null) {
                    var data = {
                        code: 1,
                        data: findContact
                    }
                    _redis_client.setex("about", 86400, JSON.stringify(data));
                    res.json(data);
                } else {
                    var data = {
                        code: 0
                    }
                    res.json(data);
                }
            }
        })

    } catch (error) {
        var data = {
            code: 0
        }
        res.json(data);
    }
});

//Post Data 
router.post('/', async (req, res) => {
    try {
        var reqTitle = req.body.title;
        var reqUrl = req.body.description;
        var reqInnerHtml = req.body.innerHtml;
        var updateContact = new DB_CONNECT({
            "title": reqTitle,
            "description": reqUrl,
            "innerHtml": reqInnerHtml
        });
        updateContact.save();
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

//Put Data
router.put('/', async (req, res) => {
    try {
        var reqId = req.body.primaryId;
        var reqTitle = req.body.title;
        var reqUrl = req.body.description;
        var reqAddress = req.body.innerHtml;
        var updateContact = await DB_CONNECT.findOneAndUpdate({ _id: new ObjectId(reqId) }, {
            $set: {
                "title": reqTitle,
                "description": reqUrl,
                "innerHtml": reqAddress
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

module.exports = router;