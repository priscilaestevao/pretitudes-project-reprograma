require("dotenv-safe").config();
const { connect } = require("../models/repository");
const candidatesModel = require("../models/black-candidates");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./authentication");

connect();

const allCandidates = (req, res) => {
  candidatesModel.find((err, candidates) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(candidates);
  });
};

const allPopularMovements = (req, res) => {
  candidatesModel.find().distinct("socialMovement", (err, movementList) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(movementList);
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
  const city = req.params.city;
  candidatesModel.find(
    { city: city },
    { socialName: 1, email: 1, socialMovement: 1, party: 1, _id: 0 },
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
    { elected: true },
    { socialName: 1, city: 1, candidateType: 1, party: 1, _id: 0 },
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

const registerNewCandidate = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    const newCandidate = new candidatesModel(req.body);
    newCandidate.save((err) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      }
      res.status(201).send({
        message: "Successfully registered!",
        id: newCandidate.id,
      });
    });
  });
};

const updateRegistration = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
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
  });
};

const removeCandidateByEmptyPopularMovement = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    const params = req.query;
    candidatesModel.deleteMany(params, (err, popularMovement) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (popularMovement) {
        return res.status(200).send("Successfully removed!");
      }
      res.status(404).send("Register not found!");
    });
  });
};

module.exports = {
  allCandidates,
  allPopularMovements,
  candidateById,
  candidatesByCity,
  electedCandidates,
  registerNewCandidate,
  updateRegistration,
  removeCandidateByEmptyPopularMovement,
};
