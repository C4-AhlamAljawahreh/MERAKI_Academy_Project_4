const express = require("express");
const {
  createNewProduct,
  updateProductById,
  deleteProductById,
  getAllProducts,
  getProductById,
  getProductByName,
  getProductsByCategory,
} = require("../controllers/products");
const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");

const productRoute = express.Router();

//      /product
productRoute.get("/",authentication, getAllProducts);
productRoute.get("/search_1",authentication, getProductById);
productRoute.get("/search_2",authentication, getProductByName);
productRoute.get("/search_3",authentication, getProductsByCategory);
productRoute.post("/", authentication, createNewProduct);
productRoute.put(
  "/:id",
  authentication,
  updateProductById
);
productRoute.delete(
  "/:id",
  authentication,
  deleteProductById
);

module.exports = productRoute;
