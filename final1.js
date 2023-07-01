let choice = "";
let vagas = [];
let candidatos = [];

do {
  choice = prompt(
    "a) Listar vagas disponíveis\nb) Criar uma nova vaga\nc) Visualizar uma vaga\nd) Inscrever um candidato em uma vaga\ne) Excluir uma vaga\nf) Sair"
  );
  switch (choice) {
    case "a":
      let prop = "";
      for (let i = 0; i < vagas.length; i++) {
        prop += `Índice da vaga:${[i]}\nNome da vaga: ${
          vagas[i].nome
        }\nQuantidade de candidatos: ${vagas[i].candidatos.length}\nDescrição: ${
          vagas[i].descrição
        }\nData Limite: ${vagas[i].dataLimite}\n\n`;
      }
      alert(prop);
      break;
    case "b":
      let vaga = {
        nome: prompt("Qual nome da vaga?"),
        candidatos: [],
        descrição: prompt("Qual a descrição?"),
        dataLimite: prompt("Qual a data limite?"),
      };
      vagas.push(vaga);
      break;
    case "c":
      let ind = parseFloat(prompt("Qual indice da vaga?"));
      let porInd = "";

      porInd += `Índice da vaga:${[ind]}\nNome da vaga: ${
        vagas[ind].nome
      }\nDescrição: ${vagas[ind].descrição}\nData Limite: ${
        vagas[ind].dataLimite
      }\nCandidatos: ${(vagas[ind].candidatos)}\n\n`;
      alert(porInd);
      break;
    case "d":
      let nome = prompt("Qual nome do candidato?");
      let indi = parseFloat(prompt("Qual indice da vaga?"));
      let porIndi = "";
      porIndi += `Índice da vaga:${[indi]}\nNome da vaga: ${
        vagas[indi].nome
      }\nDescrição: ${vagas[indi].descrição}\nData Limite: ${
        vagas[indi].dataLimite
      }\n\n`;
      (vagas[indi].candidatos.push(nome))
      break;
    case "e":
      let indice = parseFloat(prompt("Qual indice da vaga?"));
      let porIndice = "";
      porIndice += `Índice da vaga:${[indice]}\nNome da vaga: ${
        vagas[indice].nome
      }\nDescrição: ${vagas[indice].descrição}\nData Limite: ${
        vagas[indice].dataLimite
      }\n\n`;
      alert(porIndice);
      let answer = confirm("É essa a vaga mesmo?");
      if (answer) {
        vagas.splice(indice ,1)
      }
      break;
    case "f":
      alert("Encerrando...");
      break;
    default:
      alert("Essa não é uma opção válida");
      break;
  }
  escolha = choice;
} while (escolha !== "f");
