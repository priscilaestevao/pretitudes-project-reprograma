const candidatesModel = require("../models/black-candidates");

const allCandidates = (req, res) => {
  candidatesModel.find((err, candidates) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(candidates);
  });
};

const allPopularMovements = (req, res) => {
  candidatesModel.find((err, movementList) => {
    const popularMovement = movementList.map(
      (popularMovement) => popularMovement.movimentoSocial
    );
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(popularMovement);
  });
};

const candidateById = (req, res) => {
  const id = req.params.id;
  candidatesModel.findById(id, (err, candidate) => {
    if (err) {
      res.status(424).send({ message: err.message });
    } else if (candidate) {
      return res.status(200).send(candidate);
    }
    res.status(404).send("Candidate not found!");
  });
};

const candidatesByCity = (req, res) => {
  const city = req.params.cidade;
  candidatesModel.find(
    { cidade: city },
    { nomeSocial: 1, email: 1, movimentoSocial: 1, partido: 1, _id: 0 },
    (err, candidates) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (candidates) {
        return res.status(200).send(candidates);
      }
      res.status(404).send("City not found!");
    }
  );
};

const electedCandidates = (req, res) => {
  candidatesModel.find(
    { eleita: true },
    { nomeSocial: 1, cidade: 1, tipoCandidatura: 1, partido: 1, _id: 0 },
    (err, candidates) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (candidates) {
        return res.status(200).send(candidates);
      }
      res.status(404).send("Candidates not found!");
    }
  );
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
  });
};

module.exports = {
  allCandidates,
  allPopularMovements,
  candidateById,
  candidatesByCity,
  electedCandidates,
  createCandidate,
  updateRegistration,
  removeCandidateByEmptyPopularMovement,
};
