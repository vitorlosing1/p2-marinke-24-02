const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Job = require("./jobModel");

const Contract = sequelize.define(
  "Contract",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    terms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    operationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Contract.hasMany(Job, { foreignKey: "contractId" });
Job.belongsTo(Contract, { foreignKey: "contractId" });

module.exports = Contract;
