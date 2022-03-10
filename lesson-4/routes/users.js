var express = require("express");
var router = express.Router();
const usersController = require("../controller/usersController");

/* GET users listing. */
router.get("/", usersController.get_users);
//show add user page
router.get("/add", usersController.show_add_user_form);
//post - add new user
router.post("/add", usersController.add_user);
//delete user
router.get("/:id/delete", usersController.delete_user);
//edit user
router.get("/:id/edit", usersController.show_edit_user_page);
router.post("/:id/edit", usersController.edit_user);

module.exports = router;
