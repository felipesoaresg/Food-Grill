//1° video modelo de dados que mapeia as colunas do banco de dados
const Sequelize = require('sequelize');
const database = require('../db');

const produtos = database.define( 'produtos', {
    idProduto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    estoque: Sequelize.INTEGER(6),

    categoria: {
        type: Sequelize.STRING(10),
        allowNull: false
    },

    img: {
        type: Sequelize.STRING(200),
    }
});


module.exports = produtos;
//isso é a representação de uma tabela que existe no bd