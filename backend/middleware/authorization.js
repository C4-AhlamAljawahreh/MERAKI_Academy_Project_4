const jwt = require("jsonwebtoken");

const authorization = (string) => {
  return (req, res, next) => {
    const token = req.headers.authorization.split(" ").pop();
    const verified = jwt.verify(token, process.env.SECRET);
    console.log();
    const foundPermission = verified.role.permissions.find((element) => {
      return element == string;
    });
    if (foundPermission) {
      next();
    } else {
      res.status(401);
      res.json({ success: "false", message: "Unauthorize" });
    }
  };
};
module.exports = { authorization };
