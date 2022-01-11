const express = require("express");
const {createNewProduct , updateProductById,deleteProductById,getAllProducts,getProductById} = require('../controllers/products')
const {authentication } = require('../middleware/authentication')
const {authorization} = require('../middleware/authorization')

const productRoute = express.Router();


//      /product
productRoute.get('/',getAllProducts)
productRoute.get('/:id',getProductById)
productRoute.post('/',authentication,authorization('ADD_PRODUCT'),createNewProduct);
productRoute.put('/:id',authentication,authorization('UPDATE_PRODUCT'),updateProductById);
productRoute.delete('/:id',authentication,authorization('DELETE_PRODUCT'),deleteProductById);




module.exports = productRoute;
