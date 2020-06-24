var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/',mainController.root);
router.get('/product/detail/:id/:category',mainController.detail);
module.exports = router;
