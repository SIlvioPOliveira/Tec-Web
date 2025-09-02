function mostrarMensagem() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    // Verifica se o nome contém apenas letras (e espaços)
    const nomeValido = /^[A-Za-záàâãéèêíóôõúçÁÀÂÃÉÈÊÍÓÔÕÚÇ\s]+$/.test(nome);

    // Verifica se a idade é um número válido
    const idadeValida = /^[0-9]+$/.test(idade);

    if (!nomeValido) {
        alert("O nome não pode conter números ou símbolos. Insira um nome válido.");
    } else if (!idadeValida || idade <= 0) {
        alert("Por favor, insira uma idade válida.");
    } else {
        alert(nome + " tem " + idade + " anos");
    }
}
