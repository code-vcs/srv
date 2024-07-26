const express = require("express");
const app = express();
const parser = require("body-parser");
const fs = require("fs");
const path = require("path");
const port = 3040;

// Config
app.set("view engine", "ejs");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json())
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/node_modules"));

//Rotas
app.get("/", (req, res) => {
    res.render("home")
})


app.post("/create", (req, res) => {
    console.log(req.body)
    fs.writeFileSync(path.join() + "/src/DB_BANCO.json", JSON.stringify([{ title: "SISTEMA 1.0", prod: "Manga verde", valor: 200.00 }]))
})

//Server
app.listen(port, () => {
    console.log("SERVER ON....");
})