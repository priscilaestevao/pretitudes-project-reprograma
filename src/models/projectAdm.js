const mongoose = require("mongoose");
const admSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("collectionAdm", admSchema);
