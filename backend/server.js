const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const userRoute = require ('./routes/user')
app.use(express.json());

app.use('/user', userRoute)

app.use(cors());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
