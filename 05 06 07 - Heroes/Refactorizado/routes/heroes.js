let express = require ('express')
let heroesController = require ('../controllers/heroesController.js')

let router = express.Router();

router.get("/", heroesController.heroes);

router.get ("/detalle/:id", heroesController.detalle);

//router.get ("/:id/bio/:ok?", heroesController.resena);
router.get("/:id/bio/:ok?", heroesController.resena);

module.exports = router;

