require("dotenv-safe").config();
const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect(`${process.env.MONGODB_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      let db = mongoose.connection;
      db.on("error", console.log.bind(console, "Connection error!"));
      db.once("open", () => {
        console.log("Sucessfully connected!");
      });
}

module.exports = { connect }