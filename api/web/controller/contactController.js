var express = require('express');
var router = express.Router();
var DB_CONNECT = require('./../../../modal/contactModal');

//Contact
router.post('/', async (request, response) => {
    try {
        var reqName = request.body.name;
        var reqEmail = request.body.email;
        var reqSubject = request.body.subject;
        var reqMessage = request.body.message;
        var createAt = new Date();
        var createContact = new DB_CONNECT({
            name: reqName,
            email: reqEmail,
            subject: reqSubject,
            message: reqMessage,
            createAt: createAt 
        });
        createContact.save();
        var data = {
            code: 1,
            data: createContact
        }
        response.json(data);
    } catch (error) {
        var data = {
            code: 0
        }
        response.json(data);
    }
});

module.exports = router;