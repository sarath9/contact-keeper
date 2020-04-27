const express = require("express");
const router = express.Router();

// @route       POST api/contacts
// @desc        get all users contacts
// @access      private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route       POST api/contacts
// @desc        add a contacts
// @access      private
router.post("/", (req, res) => {
  res.send("add a contact");
});

// @route       POST api/contacts/:id
// @desc        update contact
// @access      private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @route       POST api/contacts/:id
// @desc        delete contact
// @access      private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
