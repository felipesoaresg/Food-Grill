const corpoSite = document.querySelector('.mainContainer1');
document.body.onload = PegarDados;
var todosDados; //PAra guardar a lista do servidor

function PegarDados() {
  const url = 'http://192.168.0.108:1313/listar-produtos';

  fetch(url, {
      headers: {
          Accept: 'application/json',
          "Content-type": "application/json"
      },
      method: 'GET'
  }).then((resultado) => {
        return resultado.json();
  })
  .then((dados) => {
      todosDados = dados;
      corpoSite.innerHTML = ''
      for (var num = 0; num < dados.length; num++) {
          const card = document.querySelector('.out');
          const criaCard = document.createElement(card);

          criaCard.innerHTML = `
              <div class="mainContainer">
                  <H5 contenteditable="true" class="nomeProduto"> ${dados[num].nomeProduto}</H5>
                  <div class="columns">
                      <div class="col">
                          <img src="${dados[num].img}" class="img">
                          <input type="button" value="EDITAR" class="btn1" onclick="editar(${num})">
                          <input type="button" value="EXCLUIR" class="btn2" onclick="excluir(${num})">
                      </div>
                      <div class="col1">
                          <H6 contenteditable="true" class="quant"> ${dados[num].estoque}</H6>
                          <H6 contenteditable="true" class="preço"> ${dados[num].preco}</H6>
                          <div class="etiqueta">${txt}</div>
                      </div>
                  </div>
              </div> 
 `            
          corpoSite.appendChild(criaCard);

                 
          var status = dados[num].estoque;
    
          if (status > 0) {
              var txt = 'disponível';
              document.querySelector('.etiqueta').style.backgroundColor = '#green';

          }else{
            var txt = 'indisponível';
            document.querySelector('.etiqueta').style.backgroundColor = 'red';
          }
        //  console.log(dados[num]);
      }
  });
}

//add produtos novos
function pegarDados() {
    const url = 'http://192.168.0.108:1313/gravar-produto'

    var nomeProduto = document.getElementById('nomeProduto').value;
    var descricao = document.getElementById('descricaoProduto').value;
    var preco = document.getElementById('precoProduto').value;
    var estoque = document.getElementById('quantProduto').value;
    var categoria = document.getElementById('produtos').value;
    var img = document.getElementById('imgProduto').value;


    var meusDados = {
        nomeProduto,
        descricao,
        preco,
        estoque,
        categoria,
        img
    }
    console.log(meusDados);

    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })

    window.location.reload(true);
}

//editar produtos do estoque
function editar(dados) {
    const url = 'http://192.168.0.108:1313/editar-produto'

console.log(dados)

    var todosProdutos = document.querySelectorAll('.nomeProduto');
    var todosPrecos = document.querySelectorAll('.preço');
    var todoEstoque = document.querySelectorAll('.quant');
    var idProduto1 = todosDados[dados].idProduto;

   var produto = todosProdutos[dados].textContent;
   var preco = todosPrecos[dados].textContent;
   var estoque = todoEstoque[dados].textContent;

   console.log(produto)
    var meusDados = {
        produto,
        preco,
        estoque,
        idProduto1
    }
    console.log(meusDados);
    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })

    window.location.reload(true);  
}

//fetch excluir produtos
function excluir(dados) {

    const url = 'http://192.168.0.108:1313/apagar-produto'

     let id = todosDados[dados].idProduto ;

     var meusDados = {
         id
     };

    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })
    window.location.reload(true);
}
