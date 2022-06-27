const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('admin/add-product',
        {
            pageTitle: 'Add Product',
            activeAddProduct: true,
            path: '/product'
        })
}

exports.postAddProduct = (req, res) => {
const {title, imageUrl, description, price} = req.body;
    const prod = new Product(title, imageUrl, description, price);
    prod.save();
    res.redirect('/products');
}

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/products',
            {
                prods: products,
                pageTitle: 'Admin Products',
                activeShop: "true",
                hasProds: products.length > 0,
                path: "/products/admin"
            })
    })
}