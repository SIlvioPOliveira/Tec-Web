function mostrarTabuada() {
    const numero = document.getElementById("numero").value;

    // Verificar se o número está entre 1 e 10
    if (numero < 1 || numero > 10 || isNaN(numero)) {
        alert("Por favor, insira um número válido entre 1 e 10.");
        return;
    }

    // Exibir a tabuada
    let resultado = "<h2>Tabuada do " + numero + ":</h2>";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    // Mostrar o resultado na página
    document.getElementById("tabuada").innerHTML = resultado;
}
