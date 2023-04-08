const { DataTypes } = require("sequelize")
const { sequelize } = require("../database/db")

const UserModel = sequelize.define(
'Users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },{
    timestamps: false, // Habilitar la funcionalidad de marca de tiempo automática
  }
);

module.exports = UserModel;