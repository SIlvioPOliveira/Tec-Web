function somarNumeros() {
    const n1 = parseFloat(document.getElementById("n1").value); 
    const n2 = parseFloat(document.getElementById("n2").value); 

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos.");
    } else {
        alert("A soma dos dois números é: " + (n1 + n2));
    }
}
