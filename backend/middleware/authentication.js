const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    res.json({ sucsess: "false", message: "please login first" });
  }
  const token = req.headers.authorization.split(" ").pop();
  jwt.verify(token, process.env.SECRET, (err, result) => {
    if (err) {
      res.json({ sucsess: "false", message: "invalid login first" });
    } else {
      req.token = token;
      next();
    }
  });
};

module.exports = { authentication };
