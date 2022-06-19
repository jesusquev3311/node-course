const express = require("express");

const router = express.Router();

router.get("/", (req, res, next)=>{
    res.send("<h1>Home Pae</h1>");
});

module.exports = router;