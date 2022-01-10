const express = require("express");
const {createNewProduct} = require('../controllers/products')

const productRoute = express.Router();

productRoute.post('/',createNewProduct);

module.exports = productRoute;
