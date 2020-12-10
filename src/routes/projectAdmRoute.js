require("dotenv-safe").config();
const express = require("express");
const router = express.Router();
const controller = require("../controllers/projectAdmController");

const authAdm = (req, res, next) => {
  const authHeader = req.get("authorization");
  if (!authHeader) {
    return res.status(401).send("You need to login!");
  }
  const token = authHeader.split(" ")[1];
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
  next();
};

router.get("/", authAdm ,controller.allAdmnistrators);
router.post("/", controller.createAdministrator);
router.post("/login", controller.login);
router.put("/:id", controller.updateAdministrator);
router.delete("/:id", controller.deleteAdministrator);

module.exports = router;
