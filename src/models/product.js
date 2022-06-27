const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const dir = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(dir, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  
    constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description,
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dir, JSON.stringify(products), (err) => {});
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
