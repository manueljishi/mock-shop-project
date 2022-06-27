const express = require("express");
const { getAddProduct, postAddProduct } = require("../controllers/admin");
const { getProducts } = require("../controllers/admin");
const router = express.Router();


router.get("/", getAddProduct);

router.post("/", postAddProduct);

router.get("/admin", getProducts)

module.exports = router;