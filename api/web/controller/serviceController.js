var express = require('express');
var router = express.Router();
var DB_CONNECT = require('./../../../modal/pageServices');

//Get Page Detail
router.get('/', async (req, res) => {
    try {
        _redis_client.get("service", async (err, services) => {
            // If that key exists in Redis store
            if (services) {
                res.json(JSON.parse(services));
            } else {
                var findContact = await DB_CONNECT.findOne({});
                if (findContact != null) {
                    var data = {
                        code: 1,
                        data: findContact
                    }
                    _redis_client.setex("service", 86400, JSON.stringify(data));
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

module.exports = router;