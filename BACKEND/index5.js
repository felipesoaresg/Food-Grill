(async () => {


    const database = require('./db');
    const funcionario = require('./models/funcionarios');
    await database.sync();

    const novoFuncionario = await funcionario.create({
        user: "yasmin11",
        email :"yasmin11@gmail.com",
        senha: "admin",
    }) 
    

    console.log(novoFuncionario);
}) ();

//2° video
console.log("Passamos pelo index!");