const Job = require("../models/jobModel");

async function getUnpaidJobsByContract(contractId) {
  try {
    const jobs = await Job.findAll({
      where: { contractId, paid: 0 },
    });
    return jobs;
  } catch (error) {
    throw new Error("Erro ao listar jobs não pagos");
  }
}

module.exports = {
  getUnpaidJobsByContract,
};
