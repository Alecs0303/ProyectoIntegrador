const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALETC,
  });
  
  sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    console.log('La aplicación está lista para recibir solicitudes');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1);
  });

module.exports = {sequelize};