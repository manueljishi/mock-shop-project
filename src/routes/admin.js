const express = require("express");
const { getAddProduct, postAddProduct } = require("../controllers/products");
const router = express.Router();


router.get("/", getAddProduct);

router.post("/", postAddProduct);

module.exports = router;