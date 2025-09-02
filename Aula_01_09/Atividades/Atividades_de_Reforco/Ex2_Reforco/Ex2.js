function exibirNumero()
{
    var resultado = "";
    var numero = 1;
    do 
    {
        resultado += numero + "";
        numero++;    
    }
    while (numero <= 10);
    alert(resultado);
}