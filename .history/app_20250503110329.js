function parOuImpar() {
  const task1 = document.getElementById("task1");
  const numero = parseInt(task1.value);
  let answer1 = document.getElementById("answer1");

  if (isNaN(numero)) {
    alert("Digite um número válido.");
  } else {
    answer1.innerHTML = `O número ${numero} é ${numero % 2 === 0 ? "par" : "ímpar"}`;
  }
  task1.value = "";
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
  task2.value = "";
}

function aprovacao() {
  const task3 = document.getElementById("task3");
  const nota = task3.value;

  if (nota < 0 || nota > 10 || isNaN(nota)) {
    alert("Digite uma nota válida.");
  } else {
    answer3.innerHTML = nota >= 7 ? "Parabéns! Você foi aprovado." : "Poxa... Você ficou de recuperação.";
  }

  task3.value = "";
}

function checkboxCheck(checkbox) {
  let mood = document.getElementsByClassName("checkbox-mood");

  for (let i = 0; i < mood.length; i++) {
    mood[i].checked = false;
  }

  checkbox.checked = true;
}

function nivelHumor() {
  const check1 = document.getElementById("option1");
  const check2 = document.getElementById("option2");
  const check3 = document.getElementById("option3");
  const answer4 = document.getElementById("answer4");
  let phrase;

  if (check1.checked) {
    phrase = "Legal! Tenha um ótimo dia!";
  } else if (check2.checked) {
    phrase = "Hmm... Pode melhorar ne?!";
  } else if (check3.checked) {
    phrase = "Poxa, espero que seu dia melhore";
  }

  answer4.innerHTML = phrase;
}

function classificacaoIMC() {
  const pesoInput = document.getElementById("task5-1");
  const alturaInput = document.getElementById("task5-2");
  const answer5 = document.getElementById("answer5");
  const peso = pesoInput.value;
  const altura = alturaInput.value;
  const IMC = peso / (altura * altura);
  let classificacao;

  if (IMC < 18.5) classificacao = "Abaixo do Peso";
  else if (IMC < 25) classificacao = "Peso Normal";
  else if (IMC < 30) classificacao = "Sobrepeso";
  else classificacao = "Obeso";

  answer5.innerHTML = `O seu IMC  é de ${IMC.toFixed(2)} classificado como "${classificacao}"`;

  pesoInput.value = "";
  alturaInput.value = "";
}

function classificacaoTriangulo() {
  const ladoAInput = document.getElementById("ladoA");
  const ladoBInput = document.getElementById("ladoB");
  const ladoCInput = document.getElementById("ladoC");
  const ladoA = ladoAInput.value;
  const ladoB = ladoBInput.value;
  const ladoC = ladoCInput.value;
  let triangulo;
  const answer6 = document.getElementById("answer6");

  if (ladoA === ladoB && ladoA === ladoC) triangulo = "equilatero";
  else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) triangulo = "escaleno";
  else triangulo = "isosceles";

  answer6 = `O triangulo é ${triangulo}`;
  ladoAInput.value = "";
  ladoBInput.value = "";
}

function totalMacas() {
  const macasInput = document.getElementById("task7");
  const macas = macasInput.value;
  const answer7 = document.getElementById("answer7");
  let precoMacas = 0.3;

  if (macas <= 0 || isNaN(macas)) {
    alert("Digite um número válido");
  } else {
    precoMacas = macas >= 12 ? 0.25 : 0.3;

    answer7.innerHTML = `O preço da maçã será de R$ ${precoMacas} dando um total de R$ ${(macas * precoMacas).toFixed(2)}`;
  }

  macasInput.value = '';
}

function ordemCrescente() {
    const numero1Input = document.getElementById('task8-1');
    const numero2Input = document.getElementById('task8-2');
    const numero1 = numero1Input.value;
    const numero2 = numero2Input.value;
    const answer8 = document.getElementById('answer8');

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Digite um número válido.");
    } else {
        answer8.innerHTML = `O número ${numero1} é ${numero1 > numero2 ? 'maior' : 'menor'} que o número ${numero2}`;
    }

    numero1Input.value = '';
    numero2Input.value = '';
}

function ordemDecrescente() {
    const answer9 = document.getElementById('answer9');

    for (let i = 10; i >= 1; i--) { 
        answer9.innerHTML += `${i} `
    }
}

function repetirNumero() {
  const numeroInput = document.getElementById('task10');
  const numero = Number(numeroInput.value);
  const answer10 = document.getElementById('answer10');

  if (Number.isInteger(numero) === true && isNaN(numero) === false) {
    answer10.innerHTML = '';
    for(let i = 1; i <= 10; i++) {
      answer10.innerHTML += `${numero} `;
    }
  } else {
    alert("Digite um número inteiro.");
  }

  numeroInput.value = '';
}

function somarNumeros() {
  const numeros = [
  document.getElementById('task10-1'),
  document.getElementById('task10-2'),
  document.getElementById('task10-3'),
  document.getElementById('task10-4'),
  document.getElementById('task10-5'),
  ];

  const answer =document.getElementById('answer11');
  let somaTotal = 0;

  for (let i = 0; i < numeros.length; i++) {
    const valor = Number(numeros[i].value);

    somaTotal += valor;
  }

  answer.innerHTML = `A soma total é: ${somaTotal}`;

  numeros.forEach((numero) => (numero.value = ''));
}

function tabuada() {
  const numero = Number(document.getElementById('task12').value);
  const answer = document.getElementById('answer12');

  let tabuada = [];

  for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} * ${i} = ${numero * i}<br>`;
  }

  answer.innerHTML = `A tabuada de ${numero} é:<br> ${tabuada}`
}

function mediaAritmetica() {
  const numero = Number(document.getElementById('task13').value);
  const answer = document.getElementById('answer13');

  let numerosTotal = [];
  let mediaTotal = 0;

  while (numero !== 0) {
    num
  }
}