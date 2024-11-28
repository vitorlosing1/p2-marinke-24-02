const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Deposit = require("./depositModel");
const Contract = require("./contractModel");

const Profile = sequelize.define(
  "Profile",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Profile.hasMany(Deposit, { foreignKey: "clientId" });
Deposit.belongsTo(Profile, { foreignKey: "clientId" });

Profile.hasMany(Contract, { foreignKey: "clientId" });
Contract.belongsTo(Profile, { foreignKey: "clientId" });

module.exports = Profile;
