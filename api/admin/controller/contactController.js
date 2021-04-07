var express = require('express');
var router = express.Router();
var DB_CONNECT = require('./../../../modal/contactModal');

//All Table Display User
router.post('/', async (req, res) => {
    try {
        // Sorting
        // var rSortColumn = req.body.active;
        var rSortType = req.body.direction;
        var sort = {
            [req.body.active]: parseInt(rSortType)
        }

        //Pagination
        var rSkip = parseInt(req.body.pageIndex) * parseInt(req.body.pageSize);
        var rLimit = parseInt(req.body.pageSize);

        //Search
        var rName = req.body.name;

        var totalCount = 0;
        var listWithdraw;
        var data;
        if (rName == "") {
            totalCount = await DB_CONNECT.countDocuments({ });
            listWithdraw = await DB_CONNECT.find({}).sort(sort).skip(rSkip).limit(rLimit).lean();
        } else {
            totalCount = await DB_CONNECT.countDocuments({ name: rName });
            listWithdraw = await DB_CONNECT.find({name: rName }).skip(rSkip).limit(rLimit).lean();
        }
        var data = {
            code: 1,
            data: {
                dataSource: listWithdraw,
                length: totalCount
            }
        }
        res.json(data);
       
    } catch (error) {
        // console.log(error)
        var data = {
            code: 0
        }
        res.json(data);
       
    }
});

//Put Data and send email using node js
router.put('/:id', async (req, res) => { 
    try {
        var reqId = req.params.id;
        var reqAnswer = req.body.answer;
        var updateContact = await DB_CONNECT.findByIdAndUpdate(reqId,{$set: {answer: reqAnswer, isAnswer: true}},{upsert: false});
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

//Delete data and message print client side
router.delete('/:id', async (req, res) => { 
    try {
        var reqId = req.params.id;
        var deleteContact = await DB_CONNECT.findByIdAndDelete(reqId);
        var data = {
            code: 1,
            data: deleteContact
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