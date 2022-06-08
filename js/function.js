document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        const buttonDolar = document.querySelector("#converterDolar");
        buttonDolar.click();
    }
});

function converterDolar() {
    const valorElemento = document.getElementById("dolar");
    const valor = valorElemento.value;
    const valorEmDolarNumerico = parseFloat(valor);
    const valorEmReal = valorEmDolarNumerico * 5;
    const elementoValorConvertido = document.getElementById("valorConvertido");
    const valorConvertido = "$" + valor + " = R$" + valorEmReal.toFixed(2);

    if (valor == 0) {
        elementoValorConvertido.innerHTML = "Insira algum valor em dolar";
    } else {
        elementoValorConvertido.innerHTML = valorConvertido;
    }
};
