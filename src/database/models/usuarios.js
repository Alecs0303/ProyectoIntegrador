// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('./db');

// const Usuarios = sequelize.define('Usuarios', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   apellido: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   telefono: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   direccion: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   avatar: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
// });

// Usuarios.hasMany(CarritoCompra);

// module.exports = Usuarios;

module.exports = (sequelize, dataTypes) => {
  let alias = 'usuarios';
  let cols = {
      id: {
          type: dataTypes.INT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false
      },
      apellido: {
        type: dataTypes.STRING,
        allowNull: false
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      direccion: {
        type: dataTypes.STRING,
        allowNull: false
      },
      avatar: {
        type: dataTypes.STRING,
        allowNull: false
      },
  };
  let config = {
      tableName: 'usuarios'
  }
  const usuarios = sequelize.define(alias, cols, config); 

  //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
  usuarios.associate = function (models) {
    usuarios.hasMany(models.carritocompra, {
          as: 'usuarios',
          //through: 'actor_movie',
          //foreignKey: 'actor_id',
          otherKey: 'CarritoCompra_id'
      });
  }

  return usuarios
};