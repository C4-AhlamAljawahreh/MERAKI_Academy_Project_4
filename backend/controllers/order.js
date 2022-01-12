const orderModel = require("../database/models/orderSchema");

//this function to create new order
const createOrder = (req, res) => {
  const { products, totalPrice, userId } = req.body;
  const newOrder = new orderModel({ products, totalPrice, userId });
  newOrder
    .save()
    .then((order) => {
      res.json({
        success: "true",
        message: "successfully created Order",
        order: order,
      });
    })
    .catch((err) => {
      res.json({ success: "false", message: "failed to create Order" });
    });
};

//this function to get all orders
const getAllOrders = (req, res) => {
  orderModel
    .find({})
    .then((result) => {
      res.status(200);
      res.json({ success: "true", message: "all orders:", orders: result });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: "false", message: "failed to get all orders" });
    });
};

//this function for delete order by id
const deleteOrderById = (req, res) => {
  const theId = req.params.id;
  orderModel
    .findByIdAndDelete({ _id: theId })
    .then((result) => {
      res.json({
        success: "true",
        message: `successfully delete order with id : ${theId}`,
        deletedOrder: result,
      });
    })
    .catch((err) => {
      res.json({
        success: "false",
        message: `failed to delete order with id : ${theId}`,
      });
    });
};

//this function for get order by id
const getOrderById = (req, res) => {
  const theId = req.params.id;
  orderModel
    .findOne({ _id: theId })
    .then((result) => {
      res.status(200);
      res.json({
        success: "true",
        message: `the order with id :${theId}`,
        order: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: "false", message: "failed to get your order" });
    });
};
module.exports = { createOrder, getAllOrders, deleteOrderById, getOrderById };
