let choice = "";
do {
  choice = prompt(
    `O que deseja calcular?\na) Área do triangulo\nb) Área do retângulo\nc) Área do quadrado\nd) Área do trapézio\ne) Área do círculo\nf) Sair`
  );
  switch (choice) {
    case "a":
      let base = parseFloat(prompt("Qual a base?"));
      let altura = parseFloat(prompt("Qual a altura?"));
      function triangulo(base, altura) {
        return (base * altura) / 2;
      }
      alert(`A área do triangulo é ${triangulo(base, altura)}`);
      break;
    case "b":
      let baseret = parseFloat(prompt("Qual a base?"));
      let alturaret = parseFloat(prompt("Qual a altura?"));
      function retângulo(baseret, alturaret) {
        return baseret * alturaret;
      }
      alert(`A área do retângulo é ${retângulo(baseret, alturaret)}`);
      break;
    case "c":
      let lado = parseFloat(prompt("Qual o lado?"));
      function quadrado(lado) {
        return lado * lado;
      }
      alert(`A área do quadrado é ${quadrado(lado)}`);
      break;
    case "d":
      let baseMaior = parseFloat(prompt("Qual a baseMaior?"));
      let baseMenor = parseFloat(prompt("Qual a baseMenor?"));
      let alturatrap = parseFloat(prompt("Qual a altura?"));
      function trapézio(baseMaior, baseMenor, alturatrap) {
        return ((baseMaior + baseMenor) * alturatrap) / 2;
      }
      alert(
        `A área do trapézio é ${trapézio(baseMaior, baseMenor, alturatrap)}`
      );
      break;
    case "e":
      let raio = parseFloat(prompt("Qual é o raio?"));
      let pi = 3.14;
      function círculo(raio, pi) {
        return pi * (raio * raio);
      }
      alert(`A área do circulo é ${círculo(raio, pi)}`);
      break;
  }
  escolha = choice;
} while (escolha !== "f");
