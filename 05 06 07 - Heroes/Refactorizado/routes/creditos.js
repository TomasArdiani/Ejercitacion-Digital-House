let express = require ('express');
let creditosController = require ("../controllers/creditosController.js");

let router = express.Router();
router.get('/', creditosController.creditos);

module.exports = router;