var express = require('express');
var router = express.Router();
var DB_CONNECT = require('./../../../modal/pageBlog');
var ObjectId = require('mongoose').Types.ObjectId;
var multer = require('multer');
var fs = require('fs')

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/blog')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toString() + file.originalname)
    }
});

// Upload File
var upload = multer({ storage: storage });

// Upload blog data
router.post('/', upload.fields([
    { name: 'imageSrc', maxCount: 1 },
    { name: 'detailSrc', maxCount: 1 },
    { name: 'authorSrc', maxCount: 1 }]), async (req, res) => {
        try {
            var getLocation = { "location": "https://samptechnologies.com/" };
            var rLocation = getLocation.location;
            var rImageAlt = req.body.imageAlt;
            var rBlogtitle = req.body.blogtitle;
            var reqAuthorname = req.body.authorname;
            var reqShortDesc = req.body.shortDesc;
            var rDate = new Date();
            var reqTitle = req.body.title;
            var reqCanonical = req.body.canonical;
            var reqMetatags = JSON.parse(req.body.metatags);
            var reqAuthordesc = req.body.authordesc;
            var insertBlog;

            if (req.files == undefined) {
                var data = {
                    code: 0
                }
                res.json(data);
            } else {
                if (req.files.imageSrc[0] == undefined || req.files.detailSrc[0] == undefined || req.files.authorSrc[0] == undefined) {
                    var data = {
                        code: 0
                    }
                    res.json(data);
                } else {
                    var rImageSrc = req.files.imageSrc[0].path;
                    var rDetailSrc = req.files.detailSrc[0].path;
                    var rAuthorSrc = req.files.authorSrc[0].path;
                    insertBlog = new DB_CONNECT({
                        "location": rLocation,
                        "imageSrc": rImageSrc,
                        "imageAlt": rImageAlt,
                        "blogtitle": rBlogtitle,
                        "authorname": reqAuthorname,
                        "date": rDate,
                        "shortDesc": reqShortDesc,
                        "detailSrc": rDetailSrc,
                        "title": reqTitle,
                        "metatags": reqMetatags,
                        "canonical": reqCanonical,
                        "authordesc": reqAuthordesc,
                        "authorSrc": rAuthorSrc
                    })
                    insertBlog.save();
                    var data = {
                        code: 1
                    }
                    res.json(data);
                }
            }
        } catch (error) {
            console.log(error);
            var data = {
                code: 0
            }
            res.json(data);
        }
    });


//All Table Display User
router.post('/:id', async (req, res) => {
    try {
        // Sorting
        // var rSortColumn = req.body.active;
        // var rSortType = req.body.direction;
        // var sort = {
        //     [req.body.active]: parseInt(rSortType)
        // }

        //Pagination
        var rSkip = parseInt(req.body.pageIndex) * parseInt(req.body.pageSize);
        var rLimit = parseInt(req.body.pageSize);

        //Search
        // var rName = req.body.name;

        var totalCount = 0;
        var listWithdraw;
        var data;
        // if (rName == "") {
        totalCount = await DB_CONNECT.countDocuments({});
        listWithdraw = await DB_CONNECT.find({}).sort({date: -1}).skip(rSkip).limit(rLimit).lean();
        // } else {
        //     totalCount = await DB_CONNECT.countDocuments({ name: rName });
        //     listWithdraw = await DB_CONNECT.find({ name: rName }).skip(rSkip).limit(rLimit).lean();
        // }
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

// Delete blog data
router.delete('/:id', async (req, res) => {
    try {
        var reqId = req.params.id;
        var getPath = await DB_CONNECT.findByIdAndDelete(reqId, { "imageSrc": 1, "detailSrc": 1, "authorSrc": 1 });
        if (fs.existsSync(getPath.imageSrc))
            fs.unlinkSync(getPath.imageSrc);
        if (fs.existsSync(getPath.detailSrc))
            fs.unlinkSync(getPath.detailSrc);
        if (fs.existsSync(getPath.authorSrc))
            fs.unlinkSync(getPath.authorSrc);
        var data = {
            code: 1
        }
        res.json(data);
    } catch (error) {
        var data = {
            code: 0
        }
        res.json(data);
    }
})


router.put('/:id', upload.fields([
    { name: 'imageSrc', maxCount: 1 }]), async (req, res) => {
        try {
            var getLocation = { "location": "https://samptechnologies.com/" };
            var rLocation = getLocation.location;
            var rImageAlt = req.body.imageAlt;
            var rBlogtitle = req.body.blogtitle;
            var reqAuthorname = req.body.authorname;
            var reqShortDesc = req.body.shortDesc;
            var rDate = new Date();
            var reqTitle = req.body.title;
            var reqCanonical = req.body.canonical;
            var reqMetatags = JSON.parse(req.body.metatags);
            var reqAuthordesc = req.body.authordesc;
            var reqParamId = req.params.id;
            if (req.files == undefined) {
                var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                    $set: {
                        "location": rLocation,
                        "imageAlt": rImageAlt,
                        "blogtitle": rBlogtitle,
                        "authorname": reqAuthorname,
                        "date": rDate,
                        "shortDesc": reqShortDesc,
                        "title": reqTitle,
                        "metatags": reqMetatags,
                        "canonical": reqCanonical,
                        "authordesc": reqAuthordesc
                    }
                }, { new: true })
            } else {
                if (req.files.imageSrc == undefined) {
                    console.log(req.files);
                    var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                        $set: {
                            "location": rLocation,
                            "imageAlt": rImageAlt,
                            "blogtitle": rBlogtitle,
                            "authorname": reqAuthorname,
                            "date": rDate,
                            "shortDesc": reqShortDesc,
                            "title": reqTitle,
                            "metatags": reqMetatags,
                            "canonical": reqCanonical,
                            "authordesc": reqAuthordesc
                        }
                    }, { new: true })
                } else {
                    var rImageSrc = req.files.imageSrc[0].path;
                    var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                        $set: {
                            "location": rLocation,
                            "imageSrc": rImageSrc,
                            "imageAlt": rImageAlt,
                            "blogtitle": rBlogtitle,
                            "authorname": reqAuthorname,
                            "date": rDate,
                            "shortDesc": reqShortDesc,
                            "title": reqTitle,
                            "metatags": reqMetatags,
                            "canonical": reqCanonical,
                            "authordesc": reqAuthordesc,
                        }
                    }, { new: false })
                    if (fs.existsSync(updateBlog.imageSrc))
                        fs.unlinkSync(updateBlog.imageSrc);
                }
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


router.put('/', upload.fields([
    { name: 'detailSrc', maxCount: 1 }
]), async (req, res) => {
    try {
        var rDate = new Date();
        var reqParamId = req.body.id;
        var rBlogtitle = req.body.blogtitle;
        if (req.files == undefined) {
            var rDetailSrc = req.files.detailSrc[0].path;
            var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                $set: {
                    blogtitle: rBlogtitle,
                    "date": rDate
                }
            }, { new: true })
            var data = {
                code: 1,
                data: updateBlog
            }
            res.json(data);
        } else {
            if (req.files.detailSrc == undefined) {
                var rDetailSrc = req.files.detailSrc[0].path;
                var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                    $set: {
                        blogtitle: rBlogtitle,
                        "date": rDate
                    }
                }, { new: true })
                var data = {
                    code: 1,
                    data: updateBlog
                }
                res.json(data);
            } else {
                var rDetailSrc = req.files.detailSrc[0].path;
                var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                    $set: {
                        blogtitle: rBlogtitle,
                        "detailSrc": rDetailSrc,
                        "date": rDate
                    }
                }, { new: false })
                if (fs.existsSync(updateBlog.detailSrc))
                    fs.unlinkSync(updateBlog.detailSrc);
                var data = {
                    code: 1,
                    data: updateBlog
                }
                res.json(data);
            }
        }
    } catch (error) {
        console.log(error);
        var data = {
            code: 0
        }
        res.json(data);
    }
});


router.put('/author/:id', upload.fields([
    { name: 'authorSrc', maxCount: 1 }
]), async (req, res) => {
    try {
        var rDate = new Date();
        var reqParamId = req.params.id;
        var rBlogtitle = req.body.blogtitle;
        var reqAuthorname = req.body.authorname;
        var reqAuthordesc = req.body.authordesc;
        if (req.files == undefined) {
            var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                $set: {
                    "blogtitle": rBlogtitle,
                    "date": rDate,
                    "authorname": reqAuthorname,
                    "authordesc": reqAuthordesc
                }
            }, { new: true })
            var data = {
                code: 1,
                data: updateBlog
            }
            res.json(data);
        } else {
            if (req.files.authorSrc == undefined) {
                var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                    $set: {
                        "blogtitle": rBlogtitle,
                        "date": rDate,
                        "authorname": reqAuthorname,
                        "authordesc": reqAuthordesc
                    }
                }, { new: true })
                var data = {
                    code: 1,
                    data: updateBlog
                }
                res.json(data);
            } else {
                var rAuthorSrc = req.files.authorSrc[0].path;
                var updateBlog = await DB_CONNECT.findByIdAndUpdate(reqParamId, {
                    $set: {
                        "blogtitle": rBlogtitle,
                        "authorSrc": rAuthorSrc,
                        "date": rDate,
                        "authorname": reqAuthorname,
                        "authordesc": reqAuthordesc
                    }
                }, { new: false })
                if (fs.existsSync(updateBlog.authorSrc))
                    fs.unlinkSync(updateBlog.authorSrc);
                var data = {
                    code: 1,
                    data: updateBlog
                }
                res.json(data);
            }
        }
    } catch (error) {
        console.log(error);
        var data = {
            code: 0
        }
        res.json(data);
    }
});


//Current View Data
router.get('/:id', async (req, res) => {
    try {
        var reqId = req.params.id;
        var getBlog = await DB_CONNECT.findOne({canonical: reqId}).lean();
        var data = {
            code: 1,
            data: getBlog
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

module.exports = router;