var express = require("express");
var router = express.Router();
//import index controller
const indexController = require("../controller/indexController");
/* GET home page. */
router.get("/", indexController.get_index);

module.exports = router;
