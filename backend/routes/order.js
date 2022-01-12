const express = require("express");
const {
  createOrder,
  getAllOrders,
  deleteOrderById,
  getOrderById,
} = require("../controllers/order");

const orderRoute = express.Router();

orderRoute.post("/", createOrder);
orderRoute.get("/", getAllOrders); // dont forget to add authorization & permission to admin
orderRoute.delete("/:id", deleteOrderById); // dont forget to add authorization & permission to admin
orderRoute.get("/:id", getOrderById);

module.exports = orderRoute;
