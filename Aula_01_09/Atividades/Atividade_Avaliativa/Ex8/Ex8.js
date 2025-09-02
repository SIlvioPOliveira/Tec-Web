// Função de validação do CPF (oficial da Receita Federal)
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  
    // Elimina CPF inválido com números repetidos
    if (strCPF == "00000000000") return false;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    // Validação do segundo dígito verificador
    Soma = 0;
    for (let i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;

    return true;
}

// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const curso = document.getElementById("curso").value;
    const mensagemDiv = document.getElementById("mensagem");

    // Verificar se os campos estão preenchidos
    if (!nome || !email || !cpf || !curso) {
        mensagemDiv.innerHTML = "Por favor, preencha todos os campos.";
        mensagemDiv.style.color = "red";
        return false;
    }

    // Validar CPF utilizando a função TestaCPF
    if (!TestaCPF(cpf)) {
        mensagemDiv.innerHTML = "CPF inválido. Por favor, insira um CPF válido.";
        mensagemDiv.style.color = "red";
        return false;
    }

    // Se tudo estiver correto
    mensagemDiv.innerHTML = "Cadastro realizado com sucesso!";
    mensagemDiv.style.color = "green";

    // Limpar os campos do formulário
    document.getElementById("formCadastro").reset();

    return true;
}
