const express = require("express");
const app = express();
const index = require("./routes/index");
const candidates = require("./routes/candidatesRoute");
const admin = require("./routes/adminRoute");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/candidaturas-negras", candidates);
app.use("/admin", admin);

module.exports = app;
