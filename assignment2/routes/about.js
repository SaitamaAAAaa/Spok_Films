const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/about.html"))
    .post((req, res) => res.send("POST ABOUT"));
module.exports = router;