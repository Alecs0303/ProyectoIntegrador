const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');

const Productos = sequelize.define('Productos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

Productos.hasMany(Categoria); 
Productos.hasMany(Proveedor);
Productos.hasMany(Marca);
Productos.hasMany(CaracteristicasProducto);

module.exports = Productos;