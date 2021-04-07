var express = require('express')
var router = express.Router()

/*--- Contact Details ----*/
var uConatctController = require('./controller/contactController');
router.use('/uContact', uConatctController);

/*--- Service Details ----*/
var uServiceController = require('./controller/serviceController');
router.use('/uService', uServiceController);

/*--- Portfolio Details ----*/
var uPortfolioController = require('./controller/portfolioController');
router.use('/uPortfolio', uPortfolioController);

/*--- Client Details ----*/
var uClientController = require('./controller/clientController');
router.use('/uClient', uClientController);

/*--- Team Details ----*/
var uTeamController = require('./controller/teamControler');
router.use('/uTeam', uTeamController);

/*---  We are Hire  Details ----*/
var uHireController = require('./controller/hireController');
router.use('/uHire', uHireController);

module.exports = router;