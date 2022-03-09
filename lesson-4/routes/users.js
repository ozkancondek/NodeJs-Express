var express = require("express");
var router = express.Router();
const usersController = require("../controller/usersController");

/* GET users listing. */
router.get("/", usersController.get_users);
//show add user page
router.get("/add", usersController.show_add_user_form);
//post - add new user
router.post("/add", usersController.add_user);

module.exports = router;
