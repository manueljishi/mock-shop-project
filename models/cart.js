const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    
    static addProduct(id, productPrice){
        //Fetch the previous cart
        //Analyze the cart and find existing product
        // Add new product/ Increase the quantity
        fs.readFile(p, (err, fileContent) => {
            let cart = {products : [], totalPrice: 0}
            if (!err){
                cart = JSON.parse(fileContent);
            }
            const existingProduct = cart.products.find(p => p.id = id);
            let existingProductIndex;
            if (existingProduct){
                existingProductIndex = cart.products.findIndex(p => p.id = id);
            }
            let updatedProduct;
            if (existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }else{
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice += productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })
    }
}