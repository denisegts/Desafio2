var botaoAdicionar = document.querySelector("#buscar-clientes");
botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F3295813");
    xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    var clientes = JSON.parse(resposta);
        console.log(clientes);

        clientes.forEach(function(cliente) {

            adicionaClienteNaTabela(cliente);

        });
    });

    xhr.send();
});

