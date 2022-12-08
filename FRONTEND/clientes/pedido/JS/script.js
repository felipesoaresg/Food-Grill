var qtd;
var preco;
var listattl = []
var cliente = sessionStorage.getItem('idCliente');
 //creation of increment function
 function increment(dados) {
    var todosContador = document.querySelectorAll('#counting');
    var contador = todosContador[dados].textContent = parseInt(todosContador[dados].innerText) + 1;
    qtd=contador;
    document.querySelector(".quant").innerText = '('+qtd+')';
    document.querySelector(".price").innerText = preco*qtd + ',00';
 }

 //creation of decrement function
 function decrement(dados) {
    var todosContador = document.querySelectorAll('#counting');
    var contador = todosContador[dados].textContent = parseInt(todosContador[dados].innerText) - 1;
    if (contador < 1){contador.innerText = 0};
    qtd=contador;
    document.querySelector(".quant").innerText = '('+qtd+')';
    document.querySelector(".price").innerText = preco*qtd + ',00';
 }

 const corpoSite = document.querySelector('.scroll');
 document.body.onload = PegarDados;
 
 function PegarDados() {
     const url = 'http://192.168.0.108:1313/listar-prod-pedido';
   
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
         corpoSite.innerHTML = ''
 
         //adicionando cards
         for (var num = 0; num < dados.length; num++) {
             //indice das arrays de produto
                const card = document.querySelector('.mainContainer');
                const criaCard = document.createElement(card);
                preco = dados[num].produto.preco;
                value = dados[num].produto.preco;
                listattl.push(value);
                
             //adicionar indice para entrar na array de produtos
 
             criaCard.innerHTML = `
             <div class="container">
    
             <div class="standardImg">
               <img src="${dados[num].produto.img}" width="75px"> 
             </div>
             
             <div class="textosContainer">
                 <h5>${dados[num].produto.nomeProduto} <div class="quant">(${dados[num].qtd})</div></h5>
             </div>

             <h5 class="price">${dados[num].produto.preco},00</h5>

               <div class="mainContador zindex">
                   <div class="contador ">            
                       <button  class = "counter" onclick="increment(${num})">+</button>  
                       <h3 id="counting">${dados[num].qtd}</h3>
                       <button class = "counter" onclick="decrement(${num})">-</button>         
                   </div>
               </div>

           </div>
             `      
            corpoSite.appendChild(criaCard);
         }

         var total = 0;
    for (var i = 0; i < listattl.length; i++) {
       total += listattl[i]
    };
    sessionStorage.setItem('ttl', total);
    document.querySelector('.ttl').innerText = 'TOTAL: ' + total + ',00';
})}
