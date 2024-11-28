const Deposit = require("../models/depositModel");
const Profile = require("../models/profileModel");

async function createDeposit(clientId, depositValue) {
  try {
    const profile = await Profile.findByPk(clientId);
    if (!profile) throw new Error("Perfil não encontrado");

    profile.balance += depositValue;
    await profile.save();

    await Deposit.create({
      clientId,
      depositValue,
      operationDate: new Date(),
    });

    return { message: "Depósito realizado com sucesso" };
  } catch (error) {
    throw new Error("Erro ao realizar depósito");
  }
}

module.exports = {
  createDeposit,
};
