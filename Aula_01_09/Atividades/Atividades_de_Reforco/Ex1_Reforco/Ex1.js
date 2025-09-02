function exibirNumeros() {
    var resultado = "";
    var numero = 1;
    
    while (numero <= 10) {
        resultado += numero + " ";
        numero++;
    }

    alert(resultado.trim()); // .trim() para remover espaço final
}
