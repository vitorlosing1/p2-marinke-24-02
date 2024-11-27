const Job = require("../models/jobModel");

async function getUnpaidJobsByContract(req, res) {
  const { contractId } = req.params;
  try {
    const jobs = await Job.findAll({
      where: { contractId, paid: 0 },
    });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar jobs não pagos" });
  }
}

module.exports = {
  getUnpaidJobsByContract,
};
