function somarNumeros() {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;

    if (isNaN(n1) || isNaN(n2) || n1 === "" || n2 === "") {
        alert("Por favor, insira valores válidos nos dois campos.");
        return;  
    }

    const soma = parseFloat(n1) + parseFloat(n2); 
    alert("A soma dos dois números é: " + soma);

   
    const botao = document.querySelector("button");

    if (soma % 2 === 0) {  
        botao.style.backgroundColor = "blue";  
    } else { 
        botao.style.backgroundColor = "green";  
    }
}
