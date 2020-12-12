require("dotenv-safe").config();
const { connect } = require("../models/repository");
const adminModel = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./authorization");

connect();

const allAdmin = (req, res) => {
  auth(req, res);

  adminModel.find((err, administrators) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(administrators);
  });
};

const registerNewAdmin = (req, res) => {
  auth(req, res);

  const encryptedPassword = req.body;
  encryptedPassword.password = bcrypt.hashSync(req.body.password, 10);

  const newAdmin = new adminModel(req.body);
  newAdmin.save((err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(201).send({
      message: "Administrator successfully registered!",
      admin_id: newAdmin.id,
    });
  });
};

const loginAdmin = (req, res) => {
  adminModel.findOne({ email: req.body.email }, (err, administrator) => {
    if (!administrator) {
      return res.status(404).send(`No administrator registered with email ${req.body.email}.`);
    }
    const validPassword = bcrypt.compareSync(req.body.password, administrator.password);
      if (!validPassword) {
        return res.status(401).send("Invalid password!");
      }
      const token = jwt.sign({ email: req.body.email }, SECRET);
      return res.status(200).send(token);
  });
};

const updateAdmin = (req, res) => {
  auth(req, res);

  const id = req.params.id;
  const updateInformation = req.body;
  updateInformation.password = bcrypt.hashSync(req.body.password, 10);

  adminModel.findByIdAndUpdate(id, updateInformation, (err, admin) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (admin) {
      return res.status(200).send("Administrator update successfully!");
    }
    res.status(404).send("Administrator not found!");
  });
};

const removeAdminByEmail = (req, res) => {
  auth(req, res);

  const params = req.query;
  adminModel.deleteOne(params, (err, email) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (email) {
      return res.status(200).send("Administrator successfully removed!");
    }
    res.status(404).send("Administrator not found!");
  });
};

module.exports = {
  allAdmin,
  registerNewAdmin,
  loginAdmin,
  updateAdmin,
  removeAdminByEmail,
};
