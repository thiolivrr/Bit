let choice = "";
let vagas = [];
let vaga = {};
let candidatos = [];

do {
  choice = prompt(
    "a) Listar vagas disponíveis\nb) Criar uma nova vaga\nc) Visualizar uma vaga\nd) Inscrever um candidato em uma vaga\ne) Excluir uma vaga\nf) Sair"
  );
  switch (choice) {
    case "a":
      let prop = "";
      for (let i = 0; i < vagas.length; i++) {
        prop += `Nome da vaga: ${vagas[i].nome}\nDescrição: ${vagas[i].descrição}\nData Limite: ${vagas[i].dataLimite}\n\n`;
      }
      alert(prop);
      break;
    case "b":
      vaga.nome = prompt("Qual nome da vaga?");
      vaga.descrição = prompt("Qual a descrição?");
      vaga.dataLimite = prompt("Qual a data limite?");
      vagas.push(vaga);
      alert(vagas);
      break;
    case "c":
      i = parseFloat(prompt("Qual indice da vaga?"));
      break;
    case "d":
      candidatos = prompt("Qual nome do candidato?");
      prompt("Qual indice da vaga?");
      break;
    case "e":
      break;
    case "f":
        alert('Encerrando...')
      break;
    default:
      alert("Essa não é uma opção válida");
      break;
  }
  escolha = choice;
} while (escolha !== "f");