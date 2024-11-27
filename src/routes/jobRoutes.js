const express = require("express");
const jobController = require("../controllers/jobController");
const router = express.Router();

router.get("/:contractId", jobController.getUnpaidJobsByContract);

module.exports = router;
