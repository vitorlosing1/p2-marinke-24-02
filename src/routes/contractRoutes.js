const express = require("express");
const router = express.Router();
const { getContractsByProfile } = require("../controllers/contractController");

router.get("/:profileId", getContractsByProfile);

module.exports = router;
