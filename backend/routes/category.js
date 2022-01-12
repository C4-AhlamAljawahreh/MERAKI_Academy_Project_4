const express = require("express");
const { createNewCategory } = require("../controllers/category");

const categoryRoute = express.Router();

//         /category
categoryRoute.post("/", createNewCategory);

module.exports = categoryRoute;
