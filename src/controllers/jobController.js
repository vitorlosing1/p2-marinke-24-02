const jobService = require("../services/jobService");

async function getUnpaidJobsByContract(req, res) {
  const { contractId } = req.params;
  try {
    const jobs = await jobService.getUnpaidJobsByContract(contractId);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getUnpaidJobsByContract,
};
