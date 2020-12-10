const express = require("express");
const router = express.Router();
const controller = require("../controllers/projectAdmController");

router.get("/", controller.allAdmnistrators);
router.post("/", controller.createAdministrator);
router.post("/login", controller.login);
router.put("/:id", controller.updateAdministrator);
router.delete("/:id", controller.deleteAdministrator);

module.exports = router;