const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title: "Pretitudes - Ocupação preta na política",
    version: "1.0.0"
  });
});

module.exports = router;
