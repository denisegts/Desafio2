var adicionarCliente = document.querySelector("#adicionar-cliente")
adicionarCliente.addEventListener("click", function(event) {
    event.preventDefault()

    let form = document.querySelector("#form-adiciona")

    let cliente = obtemClienteDoFormulario(form);

    var erros = validaCliente(cliente);

if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
}

    adicionaClienteNaTabela(cliente);

    form.reset(); 

function apagaMensagensDeErro() {
    let mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
}

});

function adicionaClienteNaTabela(cliente) {
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
    somarAsRendas();
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
    let li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("mensagem-erro");
        ul.appendChild(li);
    });

}
    
function obtemClienteDoFormulario(form){

	var cliente = {
		cpf: formataCPF(form.cpf.value),
     	nome: form.nome.value,
     	data_nascimento: form.data_nascimento.value,
     	idade: calculaIdade(form.data_nascimento.value),
     	renda: form.renda.value,   
     	justificativa: form.renda.value

    }
    return cliente;
}

function montaTr(cliente){
	var clienteTr = document.createElement("tr");
	clienteTr.classList.add("cliente");

    let rendaFloat = parseFloat(cliente.renda)    
    if (rendaFloat < salarioMinimo) {

    clienteTr.classList.add("cliente-invalido");

}

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(formataCPF(cliente.cpf), "info-cpf"));
    clienteTr.appendChild(montaTd(converteFormatoData(cliente.data_nascimento), "info-data_nascimento"));
    clienteTr.appendChild(montaTd(calculaIdade(cliente.data_nascimento), "info-data_nascimento"));
    clienteTr.appendChild(montaTd(ajustaRenda(cliente.renda), "info-renda"));
    clienteTr.appendChild(montaTd(verificaRenda(cliente.justificativa), "info-justificativa"));

    return clienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}












