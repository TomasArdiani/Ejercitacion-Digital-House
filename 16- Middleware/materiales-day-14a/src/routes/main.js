// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const mainController = require('../controllers/mainController');

const userLogs = require('../middlewares/userLogs');

const adminMiddleware = require('../middlewares/adminMiddleware');



/* GET - home page. */
router.get('/',userLogs, mainController.root);

router.get('/services', userLogs, mainController.services);


/*admin*/

router.get('/admin',mainController.adminGet);

router.post('/admin', adminMiddleware.adminPost, mainController.adminPost);


module.exports = router;
