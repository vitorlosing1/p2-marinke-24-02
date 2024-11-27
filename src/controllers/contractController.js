const contractService = require("../services/contractService");

async function getContractsByProfile(req, res) {
  const { profileId } = req.params;
  try {
    const contracts = await contractService.getContractsByProfile(profileId);
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getContractsByProfile,
};
