const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_KEY = "secret123";

const authorization = async (req, res, next) => {
  const token = req.body.token;
  console.log(token);

  jwt.verify(token, ACCESS_TOKEN_KEY, function (err, decoded) {
    if (!err) {
      next();
    } else {
      res.status(400).send("invalid credentials");
    }
  });
};

module.exports = authorization;
