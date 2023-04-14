// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('./db');

// const CarritoCompra = sequelize.define('CarritoCompra', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//   });
  
//   CarritoCompra.belongsToMany(ProductosCarritoCompra); 
  
//   module.exports = CarritoCompra;

module.exports = (sequelize, dataTypes) => {
  let alias = 'carritocompra';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      }
  };
  let config = {
      tableName: 'carritocompra'
  }
  const carritocompra = sequelize.define(alias, cols, config); 

  //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
  carritocompra.associate = function (models) {
    carritocompra.belongsToMany(models.productoscarritocompra, {
          as: 'productos',
          through: 'carritocompras_has_productoscarritocompras',
          foreignKey: ['CarritoCompra_id','CarritoCompra_Usuarios_id','ProductosCarritoCompra_id'],
          otherKey: 'ProductosCarritoCompra_id'
      });
  }

  return carritocompra
};