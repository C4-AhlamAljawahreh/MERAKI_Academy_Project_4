const productModel = require("../database/models/productSchema");


//this function to create new product 
const createNewProduct = (req, res) => {
  const { name, price, image,category } = req.body;
  const newProduct = new productModel({ name, price, image ,category });
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

//this function to update product by id
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

//this function for delete product by id 
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


//this function for get all products
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

// this function for get product by id 
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

// this function for get product by name 
const getProductByName = (req, res) => {
  const theName = req.query.name;
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
// this function for get products by category.
const getProductsByCategory = (req, res) => {
  const theCategory = req.query.category;
  productModel
    .find({ category : theCategory })
    .then((result) => {
      res.json({
        success: "true",
        message: `the products in category with id ${theCategory} `,result:result
      });
    })
    .catch((err) => {
      res.json({ success: "false", result: "failed to find " });
    });
};

module.exports = {
  createNewProduct,
  updateProductById,
  deleteProductById,
  getAllProducts,
  getProductById,
  getProductByName,
  getProductsByCategory
};
