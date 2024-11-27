const Deposit = require("../models/depositModel");
const Profile = require("../models/profileModel");

async function createDeposit(req, res) {
  const { clientId, depositValue } = req.body;
  try {
    const profile = await Profile.findByPk(clientId);
    if (!profile)
      return res.status(404).json({ error: "Perfil não encontrado" });

    const deposit = await Deposit.create({
      clientId,
      depositValue,
      operationDate: new Date(),
    });

    profile.balance += depositValue;
    await profile.save();

    res.status(200).json({ message: "Depósito realizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar depósito" });
  }
}

module.exports = {
  createDeposit,
};
