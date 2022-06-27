const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product',
        {
            pageTitle: 'Add Product',
            activeAddProduct: true
        })
}

exports.postAddProduct = (req, res) => {
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    //res.sendFile(path.join(rootDir, "views", "shop.pug"));
    const products = Product.fetchAll()
    res.render('shop',
        {
            prods: products,
            pageTitle: 'Shop',
            activeShop: "true",
            hasProds: products.length > 0
        })
}