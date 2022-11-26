function tratarDataNascimento(data_nascimento) {
    let dia = new Date(data_nascimento)
    dia.setDate(dia.getDate() + 1)
    return dia.toLocaleDateString()
}

function converteFormatoData(data_nascimento){
    let dia = data_nascimento.substring(8, 10)
    let mes = data_nascimento.substring(5, 7)
    let ano = data_nascimento.substring(0, 4)
    let dataConvertida = dia + "/" + mes + "/" + ano
    return dataConvertida
}


function calculaIdade(data_nascimento){
    //Convertando data de Hoje e data de Nascimento em milesegundos
    const hoje = new Date() // Data de hoje
    const nascimento = new Date(data_nascimento) // Outra data no passado

    // Cálculo de Idade em Anos utilizando MILISEGUNDOS
    const diferencaMilisegundos = Math.abs(hoje.getTime() - nascimento.getTime()) //Subtrai uma data pela outra    
    const idade = Math.ceil(diferencaMilisegundos / (1000 * 60 * 60 * 24 * 365)) // Divide o total pelo total de milisegundos correspondentes a 1 ano.

    //OU AINDA, cálculo de Idade utilizando meses e anos
    let diferencaMeses = ajustaMesAno(hoje) - ajustaMesAno(nascimento)
    let idadeEmAnos = Math.floor(diferencaMeses / 12)
    let idadeEmMeses = diferencaMeses % 12
    let idadeComAnoseMeses = `${idadeEmAnos} anos e ${idadeEmMeses} meses`

    return idadeComAnoseMeses
}


function ajustaMesAno(d) {
    return d.getFullYear() * 12 + d.getMonth() + 1
}