const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', { prods: "Products", docTitle: "Shop" });
});

module.exports = router;
