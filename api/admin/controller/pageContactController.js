var express = require('express');
var router = express.Router();
var DB_CONNECT = require('./../../../modal/pageContactModal');

//Get Page Detail
router.get('/', async (req, res) => {
    try {
        _redis_client.get("contact", async (err, contacts) => {
            // If that key exists in Redis store
            if (contacts) {
                res.json(JSON.parse(contacts));
            } else {
                var findContact = await DB_CONNECT.findOne();
                if (findContact != null) {
                    var data = {
                        code: 1,
                        data: findContact
                    }
                    _redis_client.setex("contact", 86400, JSON.stringify(data));
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


//Put Data and send email using node js
router.put('/', async (req, res) => {
    try {
        var reqTitle = req.body.title;
        var reqUrl = req.body.url;
        var reqAddress = req.body.address;
        var reqEmail = req.body.email;
        var reqPhone = req.body.phone;
        var updateContact = await DB_CONNECT.findOneAndUpdate({}, {
            $set: {
                "title": reqTitle,
                "url": reqUrl,
                "address": reqAddress,
                "email": reqEmail,
                "phone": reqPhone
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
