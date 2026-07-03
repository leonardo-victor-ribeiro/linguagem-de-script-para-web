Questao1();

function ColorirBotoes(qualBotao) {
  document.getElementById("btnQuestao1").style.backgroundColor = "";
  document.getElementById("btnQuestao2").style.backgroundColor = "";
  // Adicionei o botão da questão 2
  document.getElementById("btnEstatistica").style.backgroundColor = "";
  document.getElementById(qualBotao).style.backgroundColor = "green";
}

function MostrarDiv(qualDiv) {
  document.getElementById("divQuestao1").style.display = "none";
  document.getElementById("divQuestao2").style.display = "none";
  document.getElementById("divQuestaoEstatistica").style.display = "none";
  document.getElementById("ordenacaoBotoes").style.display = "inline";
  document.getElementById("ordeneTitulo").style.display = "inline";
  document.getElementById(qualDiv).style.display = "";
}

function Questao1() {
  ColorirBotoes("btnQuestao1");
  MostrarDiv("divQuestao1");
  MostraFilmes();
}

function Questao2() {
  ColorirBotoes("btnQuestao2");
  MostrarDiv("divQuestao2");
  MostraSeries();
}

function MostraFilmes() {
  let resultado =
    "<table><tr><th>Ano</th><th>Título</th><th>Gênero</th><th>Duração</th><th>Avaliação</th></tr>";
  for (let i = 0; i < filmes.length; i++) {
    resultado += "<tr>";
    resultado += "<td>" + filmes[i].year + "</td>";
    resultado += "<td>" + filmes[i].title + "</td>";
    resultado += "<td>" + filmes[i].genre + "</td>";
    resultado += "<td>" + filmes[i].duration + "</td>";
    resultado += "<td>" + filmes[i].rating + "</td>";
    resultado += "</tr>";
  }
  resultado += "</table>";
  document.getElementById("divTabelaFilmes").innerHTML = resultado;
}

function MostraSeries() {
  let resultado =
    "<table><tr><th>Ano</th><th>Título</th><th>Gênero</th><th>Temporadas</th><th>Episódios</th><th>Avaliação</th></tr>";
  for (let i = 0; i < series.length; i++) {
    resultado += "<tr>";
    resultado += "<td>" + series[i].year + "</td>";
    resultado += "<td>" + series[i].title + "</td>";
    resultado += "<td>" + series[i].genre + "</td>";
    resultado += "<td>" + series[i].seasons + "</td>";
    resultado += "<td>" + series[i].episodes + "</td>";
    resultado += "<td>" + series[i].rating + "</td>";
    resultado += "</tr>";
  }
  resultado += "</table>";
  document.getElementById("divTabelaSeries").innerHTML = resultado;
}

// Etapa 2

// Questão 1

function Color(id) {
  document.getElementById("btnAnoCrescente").style.backgroundColor = "";
  document.getElementById("btnAnoDecresente").style.backgroundColor = "";
  document.getElementById("btnTituloCrescente").style.backgroundColor = "";
  document.getElementById("btnTituloDecrescente").style.backgroundColor = "";
  document.getElementById(id).style.backgroundColor = "blue";
}

function OrdenaAnoCrescente() {
  Color("btnAnoCrescente");
  series.sort((a, b) => a.year > b.year);
  filmes.sort((a, b) => a.year > b.year);
  MostraSeries();
  MostraFilmes();
}

function OrdenaAnoDecrescente() {
  Color("btnAnoDecresente");
  series.sort((a, b) => a.year < b.year);
  filmes.sort((a, b) => a.year < b.year);
  MostraSeries();
  MostraFilmes();
}

function OrdenaTituloCrescente() {
  Color("btnTituloCrescente");
  series.sort((a, b) => a.title > b.title);
  filmes.sort((a, b) => a.title > b.title);
  MostraSeries();
  MostraFilmes();
}

function OrdenaTituloDecrescente() {
  Color("btnTituloDecrescente");
  series.sort((a, b) => a.title < b.title);
  filmes.sort((a, b) => a.title < b.title);
  MostraSeries();
  MostraFilmes();
}

// Questão 2

function Estatistica() {
  ColorirBotoes("btnEstatistica");
  document.getElementById("ordenacaoBotoes").style.display = "none";
  document.getElementById("ordeneTitulo").style.display = "none";
  document.getElementById("divQuestao1").style.display = "none";
  document.getElementById("divQuestao2").style.display = "none";
  document.getElementById("divQuestaoEstatistica").style.display = "";
  CriaTabelaEstatistica();
}

function CalculaMediaAvalFilmes() {
  let total = 0;
  let resultado = filmes.reduce(function (total, filme) {
    return total + parseInt(filme.duration);
  });
  return resultado / filmes.length;
}

function CriaTabelaEstatistica() {
  let mediaAvalFilmes = CalculaMediaAvalFilmes();
  let mediaDuracaoFilmes = 0;
  let mediaAvalSeries = 0;
  let mediaDuracaoSeries = 0;
  let resultado =
    "<table><tr><th></th><th>Média de Avaliação</th><th>Média de Duração</th></tr>";

  resultado += "<tr>";
  resultado += "<th>Filmes</th>";
  resultado += "<td>" + mediaAvalFilmes + "</td>";
  resultado += "<td>" + mediaDuracaoFilmes + "</td>";
  resultado += "</tr>";

  resultado += "<tr>";
  resultado += "<th>Series</th>";
  resultado += "<td>" + mediaAvalSeries + "</td>";
  resultado += "<td>" + mediaDuracaoSeries + "</td>";
  resultado += "</table>";
  resultado += "</tr>";

  document.getElementById("divTabelaEstatistica").innerHTML = resultado;
}
