const productModel = require("../database/models/productSchema");

const createNewProduct = (req, res) => {
  const { name, price, image } = req.body;
  const newProduct = new productModel({ name, price, image });
  newProduct
    .save()
    .then((result) => {
      res.status(201);
      res.json({ success: "true", result: result });
    })
    .catch((err) => {
      res.json({ success: "false", result: "failed to add product" });
    });
};

const updateProductById = (req, res) => {
  const theId = req.params.id;
  const { name, price, image } = req.body;
  productModel
    .findByIdAndUpdate({ _id: theId }, { name, price, image })
    .then((result) => {
      res.json({
        success: "true",
        message: "the product updated",
        oldProduct: result,
      });
    })
    .catch((err) => {
      res.json({ success: "false", result: "failed to update product" });
    });
};

const deleteProductById = (req, res) => {
  const theId = req.params.id;
  productModel
    .findByIdAndDelete({ _id: theId })
    .then((result) => {
      res.json({
        success: "true",
        message: "the product deleted",
        deletedProduct: result,
      });
    })
    .catch((err) => {
      res.json({ success: "false", result: "failed to delete product" });
    });
};
const getAllProducts = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.json({ success: "true", messgage: "all products", result: result });
    })
    .catch((err) => {
      res.json({ success: "false", messgage: "all products" });
    });
};
const getProductById = (req, res) => {
    const theId = req.query.id;
    productModel
    .findOne({ _id: theId })
    .then((result) => {
      res.json({
        success: "true",
        message: `the product with id: ${theId}`,
        product: result,
      });
    })
    .catch((err) => {
      res.json({ success: "false", result: "failed to find product" });
    });
};

const getProductByName = (req, res) => {
  const theName = req.query.name;
  console.log(theName);
  productModel
    .findOne({ name : theName })
    .then((result) => {
      res.json({
        success: "true",
        message: `the product ${theName} `,result:result
      });
    })
    .catch((err) => {
      res.json({ success: "false", result: "failed to find product" });
    });
};
module.exports = {
  createNewProduct,
  updateProductById,
  deleteProductById,
  getAllProducts,
  getProductById,
  getProductByName
};
