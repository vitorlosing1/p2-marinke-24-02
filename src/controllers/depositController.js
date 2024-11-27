const depositService = require("../services/depositService");

async function createDeposit(req, res) {
  const { clientId, depositValue } = req.body;
  try {
    const result = await depositService.createDeposit(clientId, depositValue);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createDeposit,
};
