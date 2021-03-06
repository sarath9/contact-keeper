const express = require("express");
const router = express.Router();

// @route       POST api/auth
// @desc        get logged in user
// @access      private
router.get("/", (req, res) => {
  res.send("get logged in user");
});

// @route       POST api/auth
// @desc        auth user & get token
// @access      public
router.post("/", (req, res) => {
  res.send("login User");
});

module.exports = router;
