require("dotenv-safe").config();
const projectAdmModel = require("../models/projectAdm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const allAdmnistrators = (req, res) => {
  projectAdmModel.find((err, administrators) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(administrators);
  });
};

const createAdministrator = (req, res) => {
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
};

const login = (req, res) => {};

const updateAdministrator = (req, res) => {};

const deleteAdministrator = (req, res) => {};

module.exports = {
  allAdmnistrators,
  createAdministrator,
  login,
  updateAdministrator,
  deleteAdministrator,
};
