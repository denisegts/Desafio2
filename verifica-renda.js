function verificaRenda(renda) {

    if (renda < salarioMinimo) {

        let justificativa = prompt("Valor informado da renda é inferior a um salário mínimo (R$ " + salarioMinimo.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2}) + "). Justifique:", "");
        if (justificativa != "") {
            alert("Obrigado por justificar!");
          }
        else {
            justificativa = "Faltou justificar!";
        };     

        return justificativa;
                
    } else {
        return ""
    }   
}