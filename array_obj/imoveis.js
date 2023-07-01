let imoveis = [];
let choice = "";

do {
  let choice = prompt(
    `Ímoveis cadastrados: ${imoveis.length}\na) Salvar ímovel\nb) Mostrar todos ímoveis salvos\nc) Sair`
  );
  if (choice === "a") {
    let imovel = {};
    imovel.nome = prompt("Qual será o nome do proprietário?");
    imovel.quartos = prompt("Quantos quartos este imovel possui?");
    imovel.banheiros = prompt("Quantos banheiros este ímovel possui?");
    imovel.garagem = prompt("Este quarto tem garagem? (S/N)");
    imoveis.push(imovel);
  } else if (choice === "b") {
    let prop = "";
    for (let i = 0; i < imoveis.length; i++) {
      prop += `Nome do proprietário: ${imoveis[i].nome}\nQuantidade de quartos: ${imoveis[i].quartos}\nQuantidade de banheiros: ${imoveis[i].banheiros}\nPossui Garagem? ${imoveis[i].garagem}\n\n`;
    }
    alert(prop)
  }
  var escolha = choice;
} while (escolha !== "c");
