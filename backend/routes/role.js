const express = require("express");
const { createNewRole } = require("../controllers/role");

const roleRoute = express.Router();

//       /role
roleRoute.post("/", createNewRole);

module.exports = roleRoute;
