const Contract = require("../models/contractModel");

async function getContractsByProfile(req, res) {
  const { profileId } = req.params;
  try {
    const contracts = await Contract.findAll({
      where: { clientId: profileId },
    });
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar contratos" });
  }
}

module.exports = {
  getContractsByProfile,
};
