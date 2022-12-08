(async () => {


    const database = require('./db');
    const produto = require('./models/produtos');
    await database.sync();

    const novoProduto = await produto.create({
        nomeProduto: "Coxinha de Frango",
        descricao :"Com cremely",
        preco: 3,
        estoque: 50,
        categoria: "petisco",
        img: "IMG/coxinha.png"
    }) 
    

    console.log(novoProduto);
}) ();

//2° video
console.log("Passamos pelo index!");