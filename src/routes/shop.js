const express = require("express");
const rootDir = require("../utils/path");
const path = require("path");
const router = express.Router();
const adminData = require('./admin');

router.get("/", (req, res) => {
  const products = adminData.products
  //res.sendFile(path.join(rootDir, "views", "shop.pug"));
  res.render('shop', 
  {prods: products,
  pageTitle: 'Shop',
  activeShop: "true",
  hasProds: products.length > 0})
});

module.exports = router;
