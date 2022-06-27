const Product = require('../models/product');

exports.getProducts = (req, res) => {
    //res.sendFile(path.join(rootDir, "views", "shop.pug"));
    Product.fetchAll((products) => {
        res.render('shop/product-list',
            {
                prods: products,
                pageTitle: 'All Products',
                activeShop: "true",
                hasProds: products.length > 0,
                path: "/products"
            })
    })
}

exports.getIndex = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop/index',
            {
                prods: products,
                pageTitle: 'Shop',
                activeShop: "true",
                hasProds: products.length > 0,
                path: "/"
            })
    })
}

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
    });
  };

exports.getCheckout = (req, res) =>{
    res.render('/shop/ckeckout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}