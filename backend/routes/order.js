const express = require("express");
const {createOrder} = require ('../controllers/order')


const orderRoute = express.Router();

orderRoute.post('/',createOrder)



module.exports = orderRoute;

