//1° video
//arquivo de inicialização do BD
const Sequelize = require('sequelize');
const sequelize = new Sequelize('lanchonete', 'root', 'usbw', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;

