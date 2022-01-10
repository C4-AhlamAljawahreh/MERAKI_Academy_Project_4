const express = require("express");
const {createNewUser} = require('../controllers/user')

const userRoute = express.Router();


//       /user
userRoute.post('/',createNewUser);

module.exports = userRoute;
