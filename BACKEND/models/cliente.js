//1° video modelo de dados que mapeia as colunas do banco de dados
const Sequelize = require('sequelize');
const database = require('../db');

const clientes = database.define( 'cliente', {
    idCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    nomeCliente: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mesa: Sequelize.INTEGER(2),
});

module.exports = clientes;
//isso é a representação de uma tabela que existe no bd


