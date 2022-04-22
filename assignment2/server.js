const express = require("express");


const app = express();
const port = 3000;
app.use(express.static("./routes/public"));
app.use("/", require("./routes/home"));
app.use("/about", require("./routes/about"));
app.use("/profile", require("./routes/profile"));
app.use("/quotes", require("./routes/quotes"));
app.get('/', () =>{
    res.sendFile(__dirname + "./routes/home.html")
})
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);