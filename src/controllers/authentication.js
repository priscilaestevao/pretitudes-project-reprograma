const { connect } = require("../models/repository");

connect();

const auth = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).send("You need to login!");
  }
  const token = authHeader.split(" ")[1];
  return token;
};

module.exports = { auth };
