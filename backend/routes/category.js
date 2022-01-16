const express = require("express");
const { createNewCategory, getAllCategory } = require("../controllers/category");

const categoryRoute = express.Router();

//         /category
categoryRoute.post("/", createNewCategory);
categoryRoute.get("/", getAllCategory);

module.exports = categoryRoute;
