const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.get("/",controller.allAdmin);
router.post("/", controller.registerNewAdmin);
router.post("/login", controller.loginAdmin);
router.put("/:id", controller.updateAdmin);
router.delete("/", controller.removeAdminByEmail);

module.exports = router;
