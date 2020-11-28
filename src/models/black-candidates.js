const mongoose = require("mongoose");
const candidatesSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String },
    dataNascimento: { type: String },
    telefone: { type: String },
    email: { type: String },
    cidade: { type: String },
    estado: { type: String },
    movimentoSocial: { type: String },
    partido: { type: String },
    vezesCandidato: { type: Number },
    eleita: { type: Boolean }
  },
  {
    versionKey: false
  }
);

const candidates = mongoose.model("collectionCandidates", candidatesSchema);

module.exports = candidates