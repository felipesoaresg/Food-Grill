 //variaveis que armazenam os produtos e qtds selecionadas
 var todosDados; 
 var listaSemRepetiçãoIDS = [];
 var listaid = [];
 var listaqtd = [];
 var listavalores = [];
 var qtd;
 var counter = [];
 var valor;
 var preco;
 var countersList = [];
 var valuesList = [];
 var idsList = [];
var order = [];
var valor = [];


   //pegando possíveis valores da sessionStorage
   var produtos = sessionStorage.getItem('produtos');
   var valores = sessionStorage.getItem('valores');
   var quantidades = sessionStorage.getItem('quantidades');
   var cliente = sessionStorage.getItem('idCliente');

 //criação dos contadores (adiciona)
 function increment(dados) {
    preco = todosDados[dados].preco;
    var todosContador = document.querySelectorAll('.counting');
    var contador = todosContador[dados].textContent = parseInt(todosContador[dados].innerText) + 1;
    qtd=contador;

        // add e remove Id's 
        if (qtd >= 1) {
            listaid.push(todosDados[dados].idProduto);
         }
    
        if(qtd == 0){
            listaid.splice(listaid.indexOf(todosDados[dados].idProduto))
        }

        listaSemRepetiçãoIDS = [... new Set(listaid)];
        console.log(produtos);
        console.log(valores);
        console.log(quantidades);
    }

 //criação dos contadores (subtrai)
 function decrement(dados) {
    var todosContador = document.querySelectorAll('.counting');
    var contador = todosContador[dados].textContent = parseInt(todosContador[dados].innerText) - 1;
    qtd=contador;
    if (qtd == 0){contador.innerText = 0};

            // add e remove Id's 
        if (qtd >= 1) {
            listaid.push(todosDados[dados].idProduto);
         }
    
        if(qtd == 0){
            listaid.splice(listaid.indexOf(todosDados[dados].idProduto))
        }

        listaSemRepetiçãoIDS = [... new Set(listaid)];
 }

function mandarDados() {
    //variaveis que armazenam os todos valores e que filtram eles
    var rightcounters = [];
    var allcounters = [];
    var allvalores = [];
    var rightvalues = [];
    var counters;
    var valor;
    counter = Array.from(document.getElementsByClassName('counting'));
    //looping que os adiciona a uma lista
    for (var num = 0; num < counter.length; num++) {
       counters = counter[num].textContent;
       allcounters.push(counters);
        
        
        valor = preco * counters;
        allvalores.push(valor);
        console.log(allvalores);
    }
    //filters que eliminam os valores iguais ou menores a zero
    rightcounters = allcounters.filter(qtd => qtd >= 1);
    console.log(rightcounters);

    rightvalues = allvalores.filter(qtd => qtd >= 1);
    console.log(rightvalues);


    //add quantidade a lista que vai para o BD
    if (qtd > 0) {
        if (quantidades != null) {
            countersList = quantidades.concat(rightcounters);
        } else {
            countersList = listaqtd.concat(rightcounters);
        }
    }  

    
    //add o preço total a lista que vai para o BD
    if ( qtd > 0) {
        if (valores != null){
            valuesList = valores.concat(rightvalues);
        } else {
            valuesList = listavalores.concat(rightvalues);
        }
    }

    //add os ids a lista que vai para o BD
    if ( qtd > 0) {
        if (produtos != null){
            idsList = produtos.concat(listaSemRepetiçãoIDS);
        } else {
            idsList = listaSemRepetiçãoIDS;
        }
    }

    //armazenando valores a sessionStorage p passa-los entre as telas
    sessionStorage.setItem('produtos', JSON.stringify(idsList));
    sessionStorage.setItem('quantidades', JSON.stringify(countersList));
    sessionStorage.setItem('valores', JSON.stringify(valuesList));

}



//faz o post dos produtos no carrinho
function Finalizar(){
    id =cliente;
    console.log(cliente);
    //limpando produtos
    var prodCerto = produtos.replaceAll('\\', '');
    var prodCerto2 = prodCerto.replaceAll('"', '');
    var prodCerto3 = prodCerto2.replaceAll('[]', '');
    var prodCerto4 = prodCerto3.replaceAll('[', '');
    var prodCerto5 = prodCerto4.replaceAll(']', '');
    var arrProd = prodCerto5.split('');

    //limpando valores
    var vlrCerto = valores.replaceAll('\\', '');
    var vlrCerto2 = vlrCerto.replaceAll('"', '');
    var vlrCerto3 = vlrCerto2.replaceAll('[]', '');
    var vlrCerto4 = vlrCerto3.replaceAll('[', '');
    var vlrCerto5 = vlrCerto4.replaceAll(']', '');
    var arrVlr = vlrCerto5.split('');


    //limpando quantidades
    var qtdCerto = quantidades.replaceAll('\\', '');
    var qtdCerto2 = qtdCerto.replaceAll('"', '');
    var qtdCerto3 = qtdCerto2.replaceAll('[]', '');
    var qtdCerto4 = qtdCerto3.replaceAll(',', '');
    var qtdCerto5 = qtdCerto4.replaceAll('[', '');
    var qtdCerto6 = qtdCerto5.replaceAll(']', '');
    var arrQtd = qtdCerto6.split('');
    console.log(arrProd);
    console.log(arrVlr);
    console.log(arrQtd);
    console.log(cliente)

    const url = 'http://192.168.0.108:1313/enviar-carrinho'

    for (var num = 0; num < arrProd.length; num++) {
     
        var idCliente = cliente;
        var idProduto = arrProd[num];
        var valor = arrVlr[num];
        var qtd = arrQtd[num];        

    var meusDados = {
       idCliente,
       idProduto,
       valor,
       qtd
    }
    console.log(meusDados)
    
    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })}
}