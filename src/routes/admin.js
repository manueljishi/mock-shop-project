const express = require("express");
const rootDir = require("../utils/path");
const path = require("path");
const router = express.Router();

const products = []

router.get("/", (req, res) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render('add-product', 
  {pageTitle: 'Add Product',
  activeAddProduct: true})
});

router.post("/", (req, res) => {
  products.push({title: req.body.title})
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products