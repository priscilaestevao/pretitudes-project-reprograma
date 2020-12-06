const express = require("express");
const router = express.Router();
const controller = require("../controllers/candidatesController");

router.get("/", controller.allCandidates);
router.get("/:id", controller.candidatesById);
router.get("/cidade/:cidade", controller.candidatesByCity);
router.post("/", controller.createCandidate);
router.put("/:id", controller.updateRegistration);
router.delete("/participacao", controller.removeCandidateByEmptyPopularMovement);

module.exports = router;