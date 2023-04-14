const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');
const Productos = require('./productos');

const ProductosCarritoCompra = sequelize.define('ProductosCarritoCompra', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }

  });
  
  ProductosCarritoCompra.belongsToMany(Productos);
  
  module.exports = ProductosCarritoCompra;