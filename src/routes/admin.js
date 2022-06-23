const express = require("express");
const rootDir = require("../utils/path");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
