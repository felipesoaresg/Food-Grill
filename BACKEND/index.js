//1° video
(async () => {


    const database = require('./db');
    const clientes = require('./models/cliente');
    await database.sync();

    const novoCliente = await clientes.create({
        nomeCliente: 'Yas',
        mesa: 01
    }) 

    console.log(novoCliente);
}) ();

console.log("Passamos pelo index!")

