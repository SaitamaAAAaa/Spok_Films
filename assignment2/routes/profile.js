const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/profile.html"))
    .post((req, res) => res.send("POST PROFILE"));
module.exports = router;