const express = require("express");
const {
  createOrder,
  getAllOrders,
  deleteOrderById,
  getOrderById,
} = require("../controllers/order");
const { authentication } = require("../middleware/authentication");


const orderRoute = express.Router();
///         /order
orderRoute.post("/", authentication,createOrder);
orderRoute.get("/",authentication, getAllOrders); // dont forget to add authorization & permission to admin
orderRoute.delete("/:id", authentication,deleteOrderById); // dont forget to add authorization & permission to admin
orderRoute.get("/:id",authentication, getOrderById);

module.exports = orderRoute;
