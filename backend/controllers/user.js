const userModel = require("../database/models/userSchema");

//this function for create new user
const createNewUser = (req, res) => {
  const { firstName, lastName, age, email, password, role } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    age,
    email,
    password,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201);
      res.json({ success: true,message:'successfully create new user', result: result });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false,message:'failed to create new user , try again ' });
    });
};
module.exports = {
  createNewUser,
};
