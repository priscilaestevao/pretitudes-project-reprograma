const express = require("express");
const router = express.Router();
const controller = require("../controllers/candidatesController");

router.get("/", controller.allCandidates);
router.get("/lista-movimentos", controller.allPopularMovements);
router.get("/eleitas2020", controller.electedCandidates);
router.get("/:id", controller.candidateById);
router.get("/cidade/:cidade", controller.candidatesByCity);
router.post("/", controller.registerNewCandidate);
router.put("/:id", controller.updateRegistration);
router.delete("/participacao", controller.removeCandidateByEmptyPopularMovement);

module.exports = router;