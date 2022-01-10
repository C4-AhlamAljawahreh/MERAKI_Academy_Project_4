const express = require("express");
const {createNewProduct , updateProductById,deleteProductById} = require('../controllers/products')
const {authentication } = require('../middleware/authentication')

const productRoute = express.Router();


//      /product
productRoute.post('/',authentication,createNewProduct);
productRoute.put('/:id',authentication,updateProductById);
productRoute.delete('/:id',authentication,deleteProductById);



module.exports = productRoute;
