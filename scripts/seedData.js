const Profile = require("../src/models/profileModel");
const Contract = require("../src/models/contractModel");
const Job = require("../src/models/jobModel");

async function seedData() {
  try {
    const profile = await Profile.create({
      id: 1,
      firstName: "John",
      lastName: "Doe",
      profession: "Developer",
      balance: 2000.0,
      type: "Client",
    });

    const contract = await Contract.create({
      id: 1,
      terms: "Termos do contrato X",
      clientId: profile.id,
      operationDate: new Date(),
      status: "Ativo",
    });

    await Job.create({
      id: 1,
      contractId: contract.id,
      description: "Desenvolvimento de Software",
      operationDate: new Date(),
      price: 1500.0,
      paid: false,
    });

    await Job.create({
      id: 2,
      contractId: contract.id,
      description: "Testes de Software",
      operationDate: new Date(),
      price: 500.0,
      paid: false,
    });

    console.log("Dados de exemplo inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados de exemplo:", error);
  }
}

seedData();
