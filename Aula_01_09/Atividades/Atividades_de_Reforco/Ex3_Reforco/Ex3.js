let contador = 0;

function exibirNumeros() 
{
    if (contador < 5) 
        {
        contador++;
        alert("Alerta número: " + contador);
    } else {
        alert("Limite de 5 alertas atingido.");
    }
}
