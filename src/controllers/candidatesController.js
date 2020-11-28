const candidatesModel = require("../models/black-candidates");

const allCandidates = (req, res) => {
  candidatesModel.find((err, candidatesList) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(candidatesList);
  });
};

const createCandidate = (req, res) => {
  const newCandidate = new candidatesModel(req.body)
  newCandidate.save((err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(201).send({
      message: "Successfully registered!",
      candidate: newCandidate
    });
  })
};

module.exports = {
  allCandidates,
  createCandidate
};
