const express = require("express");
const axios = require("axios")
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/quotes.html"))
    .post((req, res) => {
        const call = async () => {
            try {
              const response = await axios.get('https://api.kanye.rest/)');
              res.send("Your <i>Quote:<i>"+response.data.quote+'<br><br><form action="quotes" method="post"><button type="submit">Get Quote</button></form><br><br><a href="/">Home</a>')
            } catch (error) {
              console.error(error);
            }
          }
        call()
    });
module.exports = router;