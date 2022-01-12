const express = require("express");
const {createOrder,getAllOrders,deleteOrderById} = require ('../controllers/order')


const orderRoute = express.Router();

orderRoute.post('/',createOrder)
orderRoute.get('/',getAllOrders)
orderRoute.delete('/:id',deleteOrderById)



module.exports = orderRoute;

