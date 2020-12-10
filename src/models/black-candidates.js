const mongoose = require("mongoose");
const candidatesSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nameTRE: { type: String, required: true },
    socialName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    genre: { type: String },
    colorRace: { type: String },
    degreeEducation: { type: String },
    occupation: { type: String },
    telephone: { type: String },
    email: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String,required: true },
    socialMovement: { type: String },
    candidateType: { type: String, required: true },
    party: { type: String, required: true },
    candidateTimes: { type: Number, required: true },
    elected: { type: Boolean, required: true }
  },
  {
    versionKey: false
  }
);

const candidates = mongoose.model("collectionCandidates", candidatesSchema);

module.exports = candidates