var express = require('express')
var router = express.Router()

/*--- Contact Details ----*/
var uConatctController = require('./controller/contactController');
router.use('/uContact', uConatctController);

/*--- Page Contact Details ----*/
var uPageConatctController = require('./controller/pageContactController');
router.use('/uPageContact', uPageConatctController);

/*--- Page Services Details ----*/
var uPageConatctController = require('./controller/pageServiceController');
router.use('/uPageService', uPageConatctController);

/*--- Page Portfolio Details ----*/
var uPagePortfolioController = require('./controller/pagePortfolioController');
router.use('/uPagePortfolio', uPagePortfolioController);

/*--- Page Team Details ----*/
var uPageTeamController = require('./controller/pageTeamController');
router.use('/uPageTeam', uPageTeamController);

/*--- Page Client Details ----*/
var uPageClientController = require('./controller/pageClientController');
router.use('/uPageClient', uPageClientController);


/*--- Page Blog Details ----*/
var uPageBlogController = require('./controller/pageBlogController');
router.use('/uPageBlog', uPageBlogController);

/*--- Page Hire Details ----*/
var uPageHireController = require('./controller/pageHireController');
router.use('/uPageHire', uPageHireController);


/*--- Page About Us Details ----*/
var uPageAboutController = require('./controller/pageAboutController');
router.use('/uPageAbout', uPageAboutController);


module.exports = router;