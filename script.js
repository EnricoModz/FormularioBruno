
function enviarFormulario() {
    
    //Capturar os valores e criar a variavel para o obj JSOn

    var contaCliente = new Object();

    contaCliente.nome = document.getElementById('nome').value;
    contaCliente.sobrenome = document.getElementById('sobrenome').value;
    contaCliente.telefone = document.getElementById('telefone').value;
    contaCliente.cpf = document.getElementById('cpf').value;
    contaCliente.cidade = document.getElementById('cidade').value;
    contaCliente.estado = document.getElementById('estado').value;
    contaCliente.cep = document.getElementById('cep').value;
    contaCliente.pais = document.getElementById('pais').value;
    contaCliente.email = document.getElementById('email').value;
    

    //converter para STRING JSON

    var myJSON = JSON.stringify(contaCliente)

    console.log(myJSON)
    console.log(contaCliente.valueOf())

    document.getElementById('ValorNome').innerHTML = contaCliente.nome
    
}