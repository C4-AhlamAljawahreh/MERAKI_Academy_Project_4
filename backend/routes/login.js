const express = require("express");
const { logIn } = require("../controllers/login");

const loginRoute = express.Router();

//         /login
loginRoute.post("/", logIn);

module.exports = loginRoute;
