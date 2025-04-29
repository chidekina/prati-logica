function parOuImpar() {
    const task1 = document.getElementById('task1').value;
    const numero = parseInt(task1);
    let answer1 = document.getElementById('answer1');

    if (isNaN(numero)) {
        alert("Digite um número válido.");
    } else if (numero % 2 === 0) {
       answer1.innerHTML(`O número ${task1}`)
    } else {
        alert("Número ímpar");
    }
}