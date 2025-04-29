function parOuImpar() {
    const answer1 = document.getElementById('task1').value;
    const numero = parseInt(answer1);

    if (isNaN(numero)) {
        alert("Digite um número válido.");
    } else if (numero % 2 === 0) {
        alert("Número par");
    } else {
        alert("Número ímpar");
    }
}