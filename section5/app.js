const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next)=>{
    console.log("I'm another middleware");
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>send</button></form>");
});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next)=>{
    console.log("I'malways running");
    res.send("<h1>Home Pae</h1>");
});
const server = http.createServer(app);

server.listen(3000);
