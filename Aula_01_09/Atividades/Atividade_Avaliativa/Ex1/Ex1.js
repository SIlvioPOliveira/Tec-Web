function mostrarImpares() {
    let resultado = "Números ímpares entre 1 e 10:\n";

    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
    }

    alert(resultado);
}
