
(async () => {


    const database = require('./db');
    const carrinho = require('./models/carrinho');
    await database.sync();

    const novoCarrinho = await carrinho.create({
        cliente: 1,
        valorTotal: 5,
        qtd: 1,
        idProduto: 1,
    }) 

    console.log(novoCarrinho);
}) ();

//2° video
console.log("Passamos pelo index!");