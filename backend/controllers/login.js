const userModel = require("../database/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logIn = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .populate("role")
    .then(async (result) => {
      const varified = await bcrypt.compare(password, result.password);
      if (!varified) {
        res.json({ message: "you entered wrong Password" });
      } else {
        const payload = {
          userId: result._id,
          username: result.firstName,
          role: result.role,
        };
        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200);
        res.json({ success: "true", token: token });
      }
    })
    .catch((err)=>{
        res.json({ message: "you entered wrong Email" });
    })
};
module.exports = {
  logIn
};
