const candidates = require("../models/black-candidates");
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
  const newCandidate = new candidatesModel(req.body);
  newCandidate.save((err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(201).send({
      message: "Successfully registered!",
      candidate: newCandidate,
    });
  });
};

const updateRegistration = (req, res) => {
  const id = req.params.id;
  const updateCandidate = req.body;

  candidatesModel.findByIdAndUpdate(id, updateCandidate, (err, candidate) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (candidate) {
      return res.status(200).send("Updated successfully!");
    }
    res.status(404).send("Register not found!");
  });
};

const removeCandidateByEmptyPopularMovement = (req, res) => {
  const params = req.query;
  candidatesModel.deleteMany(params, (err, popularMovement) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (popularMovement) {
        return res.status(200).send("Successfully removed!");
      }
      res.status(404).send("Register not found!");
    }
  );
};

module.exports = {
  allCandidates,
  createCandidate,
  updateRegistration,
  removeCandidateByEmptyPopularMovement,
};
