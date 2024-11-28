const express = require("express");
const contractRoutes = require("./src/routes/contractRoutes");
const depositRoutes = require("./src/routes/depositRoutes");
const jobRoutes = require("./src/routes/jobRoutes");
const sequelize = require("./src/config/dbConfig");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/contracts", contractRoutes);
app.use("/deposits", depositRoutes);
app.use("/jobs", jobRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida!");
    await sequelize.sync({ force: true });
    console.log("Tabelas sincronizadas com sucesso.");
  } catch (error) {
    console.error(
      "Erro ao conectar ou sincronizar com o banco de dados:",
      error.message
    );
  }
})();

module.exports = app;
