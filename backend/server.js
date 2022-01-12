const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
app.use(express.json());
app.use(cors());

//user router
const userRoute = require("./routes/user");
app.use("/users", userRoute);

//role router
const roleRoute = require("./routes/role");
app.use("/role", roleRoute);

//logIn router
const loginRoute = require("./routes/login");
app.use("/login", loginRoute);

//product router
const productRoute = require("./routes/products");
app.use("/product", productRoute);

//category router
const categoryRoute = require("./routes/category");
app.use("/category", categoryRoute);

//order router
const orderRoute = require("./routes/order");
app.use("/order", orderRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
