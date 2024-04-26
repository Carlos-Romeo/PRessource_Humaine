const express = require("express")
const app = express();
const port = 5000;


app.get("/",(req, res) => {
    res.status(200).json("la connexion est opérationnel")
})


app.listen(port, console.log("backend active"))