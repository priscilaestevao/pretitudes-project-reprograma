const { connect } = require("../models/repository");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

connect();

const auth = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).send("You need to login!");
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    return token;
  });
};

module.exports = { auth };
