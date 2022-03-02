const express = require("express");
const router = express.Router();

//pat h is aldready /user
router.get("/", (req, res) => {
  res.send("u connected from user path");
});
router.get("/ozkan", (req, res) => {
  res.send("user ozkan");
});

module.exports = router;
