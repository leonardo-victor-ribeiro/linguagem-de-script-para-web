fetch("./selecoes.json")
  .then((reponse) => reponse.json())
  .then((jsonData) => GerarEstatisticasSelecoes(jsonData));

function GerarEstatisticasSelecoes(selecoes) {
  const paisesPorContinente = selecoes.reduce(GetPaisesPorContinente, {});

  CriarTabelaSelecoes(paisesPorContinente);
}

function CriarTabelaSelecoes(paisesPorContinente) {
  const titulo = document.createElement("h2");
  titulo.textContent = "Selecões";

  const headerRow = document.createElement("tr");
  const thContinente = document.createElement("th");
  const thPaises = document.createElement("th");
  const thQuantidade = document.createElement("th");

  thContinente.textContent = "Continente";
  thPaises.textContent = "Países";
  thQuantidade.textContent = "Quantidade de Países";

  const table = document.createElement("table");
  headerRow.append(thContinente, thPaises, thQuantidade);
  table.append(headerRow);

  for (const [continente, listaPaises] of Object.entries(paisesPorContinente)) {
    let tr = document.createElement("tr");

    let tdContinente = document.createElement("td");
    tdContinente.textContent = continente;
    let tdQuantidade = document.createElement("td");
    tdQuantidade.textContent = listaPaises.length;
    let tdPaises = document.createElement("td");

    listaPaises.forEach((pais) => {
      tdPaises.textContent += " " + pais.name + ",";
    });
    tr.append(tdContinente, tdPaises, tdQuantidade);
    table.append(tr);
  }

  const section = document.getElementById("section-selecoes");
  section.append(table);
}

function GetPaisesPorContinente(continentes, pais) {
  const continente = pais.continent;

  if (!continentes[continente]) {
    continentes[continente] = [];
  }

  continentes[continente].push(pais);
  return continentes;
}

fetch("./jogadores.json")
  .then((reponse) => reponse.json())
  .then((jsonData) => GerarEstatisticasJogadores(jsonData));

function GerarEstatisticasJogadores(jogadores) {
  const jogadorMaiorNome = GetJogadorMaiorNome(jogadores);
  const jogadorMaisVelho = GetJogadorMaisVelho(jogadores);
  const jogadorMaisNovo = GetJogadorMaisNovo(jogadores);
  CriaListaEstatisticasJogadores(
    jogadores.length,
    jogadorMaisVelho,
    jogadorMaisNovo,
    jogadorMaiorNome
  );
}

function GetJogadorMaiorNome(jogadores) {
  let maiorNome = "";
  let jogadorMaiorNome;

  for (jogador of jogadores) {
    if (jogador.player.length > maiorNome.length) {
      jogadorMaiorNome = jogador;
      maiorNome = jogador.player;
    }
  }
  return jogadorMaiorNome;
}

function GetJogadorMaisVelho(jogadores) {
  let maiorIdade = 0;
  let jogadorMaisVelho;
  const ano = new Date(2026, 7, 2).getFullYear();
  for (jogador of jogadores) {
    if (ano - jogador.birth_year > maiorIdade) {
      jogadorMaisVelho = jogador;
      maiorIdade = ano - jogador.birth_year;
    }
  }
  return jogadorMaisVelho;
}

function GetJogadorMaisNovo(jogadores) {
  let menorIdade = 100;
  let jogadorMaisNovo;
  const ano = new Date(2026, 7, 2).getFullYear();
  for (jogador of jogadores) {
    if (ano - jogador.birth_year < menorIdade) {
      jogadorMaisNovo = jogador;
      menorIdade = ano - jogador.birth_year;
    }
  }
  return jogadorMaisNovo;
}

function CriaListaEstatisticasJogadores(qtd, maisVelho, maisNovo, maiorNome) {
  const ano = new Date(2026, 7, 2).getFullYear();
  const ul = document.getElementById("lista-estatisticas-jogadores");
  const liQtdJogadores = document.createElement("li");
  liQtdJogadores.textContent = `Quantidade de jogadores: ${qtd}`;
  const liMaisVelho = document.createElement("li");
  liMaisVelho.textContent = `Jogador mais velho: ${maisVelho.player} (${
    maisVelho.team
  }) - ${maisVelho.birth_year} (${ano - maisVelho.birth_year} anos)`;
  const liMaisNovo = document.createElement("li");
  liMaisNovo.textContent = `Jogador mais novo: ${maisNovo.player} (${
    maisNovo.team
  }) - ${maisNovo.birth_year} (${ano - maisNovo.birth_year} anos)`;
  const liMaiorNome = document.createElement("li");
  liMaiorNome.textContent = `Jogador com maior nome: ${maisNovo.player} (${maisNovo.player.length} caracteres)`;
  ul.replaceChildren(liQtdJogadores, liMaisVelho, liMaisNovo, liMaiorNome);
}
