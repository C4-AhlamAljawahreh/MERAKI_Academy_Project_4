const express = require("express");
const {createNewUser} = require('../controllers/user')

const userRoute = express.Router();

userRoute.post('/',createNewUser)

module.exports = userRoute;
