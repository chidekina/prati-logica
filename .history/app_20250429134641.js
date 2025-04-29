function parOuImpar() {
    const task1 = document.getElementById('task1').value;
    const numero = parseInt(task1);
    let answer1 = document.getElementById('answer1');

    if (isNaN(numero)) {
        alert("Digite um número válido.");
    } else if (numero % 2 === 0) {
       answer1.innerHTML = `O número ${task1} é par`;
    } else {
        answer1.innerHTML = `O número ${task1} é ímpar`;
    }
}

function classificacaoEtaria() {
    const task2 = document.getElementById('task2').value;
    const idade = parseInt(task2);
    let classificacao;
    let answer2 = document.getElementById('answer2');

    if (idade >= 60) {
        classificacao = 'idoso';
    } else if (idade >= 20) {
        classificacao = 'adulto';
    } else if (idade >= 12) {
        classificacao = 
    }
}