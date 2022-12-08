  const corpoSite = document.querySelector('.site-content');
  document.body.onload = PegarDados;

  function PegarDados() {
    const url = 'http://192.168.0.108:1313/listar-sobremesas'

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
            const card = document.querySelector('.main');
            const criaCard = document.createElement(card);

            criaCard.innerHTML = `

            <div class="mainContainer">
                <div class="container" id="container">
                    <div class="standardImg">
                    <img src="${dados[num].img}" width="75px"> 
                    </div>
                    
                    <div class="textosContainer">
                    <h6 id="nome">${dados[num].nomeProduto}</h6>
                    <p id="desc">${dados[num].descricao}</p><br>
                    <p id="preco">${dados[num].preco},00</p>
                    </div>

                    <div class="mainContador zindex">
                        <div class="contador ">            
                            <button  class = "counter" onclick="increment(${num})">+</button>  
                            <h3 class="counting">0</h3>
                            <button class = "counter" onclick="decrement(${num})">-</button>         
                        </div>
                    </div>

                </div>
            </div>`                 
            corpoSite.appendChild(criaCard);
        }
    });
}


