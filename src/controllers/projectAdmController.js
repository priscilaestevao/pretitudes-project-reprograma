require("dotenv-safe").config();
const projectAdmModel = require("../models/projectAdm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const auth = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).send("You need to include headers.");
  }
  const token = authHeader.split(" ")[1];
  return token;
};

const allAdmnistrators = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    projectAdmModel.find((err, administrators) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      }
      res.status(200).send(administrators);
    });
  });
};

const createAdministrator = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    projectAdmModel.findOne({ email: req.body.email }, (email) => {
      if (email) {
        res.status(409).send("Administrator already registered. Go to login!");
      }
      const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
      req.body.password = encryptedPassword;
      const newAdm = new projectAdmModel(req.body);
      newAdm.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({
          message: "Administrator successfully registered!",
          administrator: newAdm,
        });
      });
    });
  });
};

const login = (req, res) => {
  projectAdmModel.findOne({ email: req.body.email }, (err, administrator) => {
    if (!administrator) {
      return res.status(404).send(`No administrator registered with email ${req.body.email}.`);
    }
    const validPassword = bcrypt.compareSync(
      req.body.password,
      administrator.password
    );
    if (!validPassword) {
      return res.status(401).send("Invalid password!");
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const updateAdministrator = (req, res) => {};

const deleteAdministrator = (req, res) => {};

module.exports = {
  allAdmnistrators,
  createAdministrator,
  login,
  updateAdministrator,
  deleteAdministrator,
};
