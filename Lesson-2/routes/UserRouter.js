const express = require("express");
const router = express.Router();
//get user list from database
const data = require("../models/data");

//pat h is aldready /user
// router.get("/", (req, res) => {
//   res.send("u connected from user path");
// });
router.get("/", (req, res) => {
  res.render("user", { users: data.userList, id: "" });
});
router.get("/:id", (req, res) => {
  res.render("user", { users: data.userList, id: req.params.id });
});
// router.get("/ozkan", (req, res) => {
//   res.get("user");
// });

module.exports = router;
