const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Payment = require("./paymentModel");

const Job = sequelize.define(
  "Job",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    paid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

Job.hasMany(Payment, { foreignKey: "jobId" });
Payment.belongsTo(Job, { foreignKey: "jobId" });

module.exports = Job;
