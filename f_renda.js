function ajustaRenda(renda){
    let rendaConvertida = parseFloat(renda).toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2})
    return rendaConvertida
}

function somarAsRendas(){
    let clientes = document.querySelectorAll(".cliente")
    let somaFloat = 0
    // console.log('clientes:',clientes)
    // console.log('somaFloat:',somaFloat)

    for (var i = 0; i < clientes.length; i++) {
        let cliente = clientes[i]
        let tdRenda = cliente.querySelector(".info-renda")
        let rendaString = tdRenda.textContent
        let rendaFloat = parseFloat(rendaString.toString().replace(/\./g, '').replace(',','.'))
        somaFloat = somaFloat + rendaFloat
        // console.log('cliente:',cliente)
        // console.log('tdRenda:',tdRenda)
        // console.log('rendaString:',rendaString)
        // console.log('rendaFloat:',rendaFloat)
    }  
    
    let somatorioRendas = document.querySelector("#somatorioRendas")
    let somaString = somaFloat.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2})
    somatorioRendas.innerHTML = somaString

}


  

	

	

	
