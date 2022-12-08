
(async () => {


    const database = require('./db');
    const pedido = require('./models/pedidos');
    await database.sync();

    const novoPedido = await pedido.create({
        idCliente: 3,
        status: 'pendente',
        pagamento: 'pix'
    }) 

    console.log(novoPedido);
}) ();

//2° video
console.log("Passamos pelo index!");