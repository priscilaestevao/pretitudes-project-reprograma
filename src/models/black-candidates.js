const mongoose = require("mongoose");
const candidatesSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nomeTRE: { type: String, required: true },
    nomeSocial: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    genero: { type: String },
    racaCor: { type: String },
    grauInstrucao: { type: String },
    ocupacao: { type: String },
    telefone: { type: String },
    email: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String,required: true },
    movimentoSocial: { type: String },
    tipoCandidatura: { type: String, required: true },
    partido: { type: String, required: true },
    vezesCandidato: { type: Number, required: true },
    eleita: { type: Boolean, required: true }
  },
  {
    versionKey: false
  }
);

const candidates = mongoose.model("collectionCandidates", candidatesSchema);

module.exports = candidates