const express = require("express");
const router = express.Router();
const controller = require("../controllers/candidatesController");

router.post("/", controller.createCandidate);

module.exports = router;