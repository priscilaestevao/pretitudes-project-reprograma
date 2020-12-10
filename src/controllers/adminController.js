require("dotenv-safe").config();
const { connect } = require("../models/repository");
const adminModel = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./authentication");

connect();

const allAdmin = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
  });
  adminModel.find((err, administrators) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(administrators);
  });
};

const registerNewAdmin = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = encryptedPassword;
    const newAdmin = new adminModel(req.body);
    newAdmin.save((err) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      }
      res.status(201).send({
        message: "Administrator successfully registered!",
        administrator: newAdmin,
      });
    });
  });
};

const loginAdmin = (req, res) => {
  adminModel.findOne({ email: req.body.email } , (err, administrator) => {
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

const updateAdmin = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    const id = req.params.id;
    const updateAdmin = req.body;
    adminModel.findByIdAndUpdate(id, updateAdmin, (err, admin) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (admin) {
        return res.status(200).send("Administrator update successfully!");
      }
      res.status(404).send("Administrator not found!");
    });
  });
};

const removeAdminByEmail = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    const params = req.query;
    adminModel.deleteOne(params, (err, email) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (email) {
        return res.status(200).send("Administrator successfully removed!");
      }
      res.status(404).send("Administrator not found!");
    });
  });
};

module.exports = {
  allAdmin,
  registerNewAdmin,
  loginAdmin,
  updateAdmin,
  removeAdminByEmail,
};
