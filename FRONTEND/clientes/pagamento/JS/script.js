var pagamento;
function marcaDesmarca(id) {
  if (id == "credito") {
    document.getElementById('debito').checked = false;
    document.getElementById('pix').checked = false;
    document.getElementById('dinheiro').checked = false;
    pagamento = 'crédito';
  } else if (id == "debito") {
    document.getElementById('credito').checked = false;
    document.getElementById('pix').checked = false;
    document.getElementById('dinheiro').checked = false;
    pagamento = 'débito';
  } else if (id == "pix") {
    document.getElementById('credito').checked = false;
    document.getElementById('debito').checked = false;
    document.getElementById('dinheiro').checked = false;
    pagamento = 'pix';
  } else if (id == "dinheiro") {
    document.getElementById('credito').checked = false;
    document.getElementById('debito').checked = false;
    document.getElementById('pix').checked = false;
    pagamento = 'dinheiro';
  }
}

function enviar () {
  const url = 'http://192.168.0.108:1313/enviar-pedido'
  
  var idCliente = sessionStorage.getItem('idCliente');
  pag = pagamento

    var meusDados = {
      idCliente,
      pag
    }
    console.log(meusDados)
    fetch(url, {
      method: 'Post',
      body: JSON.stringify(meusDados),
      headers: {
          "Content-type": "application/json"

      },
  }).then((resultado) => {
      return resultado;
  })}


  document.body.onload = PegarDados;
  function PegarDados() {
    var total = sessionStorage.getItem('ttl');
    console.log(total)
    document.querySelector('.ttl').innerText = 'TOTAL: ' + total + ',00';
  }