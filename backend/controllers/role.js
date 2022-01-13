const roleModel = require("../database/models/roleSchema");

//this function for create new role
const createNewRole = (req, res) => {
  const { role, permissions } = req.body;
  const newUser = new roleModel({ role, permissions });
  newUser
    .save()
    .then((result) => {
      res.status(201);
      res.json({ success: true,message:"the Role created successfully", result: result });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message:'failed to create Role' });
    });
};
module.exports = {
  createNewRole,
};
