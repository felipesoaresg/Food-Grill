//1° video modelo de dados que mapeia as colunas do banco de dados
const Sequelize = require('sequelize');
const database = require('../db');

const funcionarios = database.define( 'funcionarios', {
    idFuncionário: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = funcionarios;
//isso é a representação de uma tabela que existe no bd