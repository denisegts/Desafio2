function validaCliente(cliente) {

    var erros = [];

    if (cliente.cpf.length == 0){
        erros.push("CPF inválido. Por favor, digite seu CPF corretamente.");
    }

    if (cliente.nome.length == 0){
        erros.push("Nome inválido. Por favor, digite seu nome corretamente.");
    }

    if (!validadataNascimento(cliente.data_nascimento)){
        erros.push("Data de Nascimento inválida. Por favor, digite sua data de nascimento corretamente.");
    }

    if (cliente.renda.length == 0){
        erros.push("Renda Inválida. Por favor, digite sua renda corretamente");
    }

    return erros;

}

function validaCPF(cpf) {
    if(!cpf.length == 0) {
        return true
    } else {
        return false
    }
}

function validaNome(nome) {
  if(!nome.length == 0) {
        return true
    } else {
        return true;
    }
}

function validadataNascimento(data_nascimento) {
    const converteData = Date.parse(data_nascimento)
    const dataValida = !isNaN(converteData)
    return dataValida;
}


function validaRenda(renda) {
    const rendaValida = parseFloat(renda) > 0
    return rendaValida
}
