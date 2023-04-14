// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('./db');
// const Productos = require('./productos');

// const Categoria = sequelize.define('Categoria', {

//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     }
//       nombre: {
//       type: dataTypes.STRING(25),
      //   allowNull: false
      // }

//   });
  
//   Categoria.belongsToMany();
//   Categoria.belongsTo(Productos);
//   module.exports = Categoria;

module.exports = (sequelize, dataTypes) => {
  let alias = 'categoria';
  let cols = {
      id: {
          type: dataTypes.INT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING(25),
        allowNull: false
      }
  };
  let config = {
      tableName: 'categoria'
  }
  const categoria = sequelize.define(alias, cols, config); 

  //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
  categoria.associate = function (models) {
    categoria.hasMany(models.productos, {
          as: 'categoria',
          //through: 'actor_movie',
          //foreignKey: 'actor_id',
          otherKey: 'productos_id'
      });
  }

  return categoria
};