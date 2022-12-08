document.body.onload = PegarDados;
var todosDados; 
var ultimo;

function PegarDados () {
    const url = 'http://192.168.0.108:1313/mostrarCliente'

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
    //pegando todos ids
    listaIds = [];
    for (var num = 0; num < dados.length; num++) {
        listaIds.push(dados[num].idCliente);
        console.log(listaIds);
    }
    //pegando ID do cliente que acabou de entrar
    ultimo = listaIds.length;
    console.log(ultimo);
    
    sessionStorage.setItem('idCliente', ultimo);
})
}
