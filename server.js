const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("You are on the server");

})
const port =  process.env.PORT || 1200
app.listen(port, () => {console.log("server is running")})
