const Sequelize = require('sequelize');
const database = require('../db');
const cliente = require('./cliente');

const pedido = database.define( 'pedidos', {
    pedidoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    status: Sequelize.STRING(9),
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    pagamento : Sequelize.STRING
});

pedido.hasOne(cliente, {
    foreignKey:'idCliente', allowNull: false,
});
pedido.belongsTo(cliente, {
    foreignKey:'idCliente', allowNull: false,
});

module.exports = pedido;
//isso é a representação de uma tabela que existe no bd