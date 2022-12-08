const Sequelize = require('sequelize');
const database = require('../db');
const produtos = require('./produtos');

const carrinho = database.define( 'carrinho', {
    Idcarrinho: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    cliente: Sequelize.INTEGER,
    valorTotal:Sequelize.DECIMAL(8,2),
    qtd: Sequelize.INTEGER(4),
    idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

carrinho.hasOne(produtos,{
    foreignKey:'idProduto'
});

carrinho.belongsTo(produtos, {
    foreignKey:'idProduto'
});

module.exports = carrinho;
//isso é a representação de uma tabela que existe no bd