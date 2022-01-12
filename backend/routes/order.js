const express = require("express");
const {createOrder,getAllOrders} = require ('../controllers/order')


const orderRoute = express.Router();

orderRoute.post('/',createOrder)
orderRoute.get('/',getAllOrders)



module.exports = orderRoute;

