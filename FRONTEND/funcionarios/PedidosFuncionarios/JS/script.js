//listando pedidos com fetch
const corpoSite = document.querySelector('.content');
const col = document.querySelector('.col');
const col1 = document.querySelector('.col1');
var card = document.querySelector('.out');
var listattl = [];
var todosDados;
document.body.onload = PegarDados;


function PegarDados() {
    const url = 'http://192.168.0.108:1313/mostrarpedido';
  
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

        //adicionando cards
        for (var num = 0; num < dados.length; num++) {
            console.log(dados.length)
            const card = document.querySelector('.out');
            const criaCard = document.createElement(card);

            criaCard.innerHTML = `
            <div class="mainContainer">
                <div class="columns">
                    <div class="col">
                        <h4>PEDIDO ${dados[num].pedidoId}</h4>
                        <h4> MESA ${dados[num].cliente.mesa}</h4>
                        <h6> PAGAMENTO: ${dados[num].pagamento}</h6>
                        <div class="row2">
                            <input list="option" id="status" name="status" class="status" onclick= "mostra()"placeholder="Pendente" />
                            <datalist id="option">
                                <option value="Pendente">
                                <option value="Fazendo">
                                <option value="Concluído">
                            </datalist>
                        </div>
                    </div>
                    <div class="col1">
                        <div id="row2"></div>
                        <h3 class="ttl">TOTAL: </h3>
                    </div>
                </div>
            </div> 
            `        
        corpoSite.appendChild(criaCard);
  }
});

    const url2 = 'http://192.168.0.108:1313/listar-prod-pedido';
   
     fetch(url2, {
         headers: {
             Accept: 'application/json',
             "Content-type": "application/json"
         },
         method: 'GET'
     }).then((resultado) => {
         return resultado.json();
     })
     .then((dados) => {
        for (var i = 0; i < dados.length; i++) {
            value = dados[i].produto.preco;
            listattl.push(value);
            const linha = document.querySelector('.h6');
            const criaLinha = document.createElement(linha);

            const row = document.querySelector('#row2');

            criaLinha.innerHTML= `
            <p> <img src="${dados[i].produto.img}" id="img">   ${dados[i].produto.nomeProduto} (${dados[i].qtd})  ${dados[i].produto.preco},00</p>
            `

            row.appendChild(criaLinha);
    }
    var total = 0;
    for (var i = 0; i < listattl.length; i++) {
       total += listattl[i]
    };

    document.querySelector('.ttl').innerText =  'TOTAL: ' + total + ',00';
    })
  }

  function mostra(){
    console.log(document.querySelector('.status').value)
  }
  function todos() {

    var status = document.querySelector('.status').value;
   
    switch (status) {
        case "Pendente": 
            card.style.display = 'block';
        //mandar pra tela de pendentes
        break;
        case "Fazendo":
            card.style.display = 'block';
        break;
        case "Concluído":
            card.style.display = 'block';
        break;
    }
  }

  function pendente() {

    var status = document.querySelector('.status').value;
   
    switch (status) {
        case "Pendente": 
            card.style.display = 'block';
        //mandar pra tela de pendentes
        break;
        case "Fazendo":
            card.style.display = 'none';
        break;
        case "Concluído":
            card.style.display = 'none';
        break;
    }
  }

  function fazendo() {

    var status = document.querySelector('.status').value;
   
    switch (status) {
        case "Pendente": 
            card.style.display = 'none';
        //mandar pra tela de pendentes
        break;
        case "Fazendo":
            card.style.display = 'block';
        break;
        case "Concluído":
            card.style.display = 'none';
        break;
    }
  }

  function done() {

    var status = document.querySelector('.status').value;
   
    switch (status) {
        case "Pendente": 
            card.style.display = 'none';
        break;
        case "Fazendo":
            card.style.display = 'none';
        break;
        case "Concluído":
            card.style.display = 'block';
        break;
    }
  }


  function autoRefresh() {
   window.location.reload(true)
}
//setInterval('autoRefresh()', 60000);