const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("You are on the server");

})

app.listen(1200, () => {console.log("server is running")})