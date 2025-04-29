function parOuImpar() {
  const task1 = document.getElementById("task1");
  const numero = parseInt(task1.value);
  let answer1 = document.getElementById("answer1");

  if (isNaN(numero)) {
    alert("Digite um número válido.");
  } else {
    answer1.innerHTML = `O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}`;
  }
  task1.value = '';
}

function classificacaoEtaria() {
  const task2 = document.getElementById("task2");
  const idade = parseInt(task2.value);
  let classificacao;
  let answer2 = document.getElementById("answer2");

  if (isNaN(idade) || idade > 100 || idade < 0) {
    alert("Digite uma idade válida.");
  } else {
    if (idade >= 60) {
      classificacao = "idoso";
    } else if (idade >= 20) {
      classificacao = "adulto";
    } else if (idade >= 12) {
      classificacao = "adolescente";
    } else {
      classificacao = "criança";
    }
    answer2.innerHTML = `A idade de ${idade} anos é classificada como ${classificacao}.`;
  }
  task2.value = '';
}

function aprovacao() {
    const task3 = document.getElementById('task3');
    const nota = task3.value;

    if( nota < 0 || nota > 10 || isNaN(nota)) {
        alert('Digite uma nota válida.');
    } else {
        answer3.innerHTML = nota >= 7 ? 'Parabéns! Você foi aprovado.' : 'Poxa... Você ficou de recuperação.';
    }

    task3.value = '';
}

function nivelHumor() {
    const check1 = document.getElementById('option1')
}