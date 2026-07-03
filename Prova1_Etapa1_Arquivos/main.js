function limpar() {
  document.getElementById("tbSeries").setAttribute("hidden", true);
  document.getElementById("tbFilmes").setAttribute("hidden", true);
}

function btnFilmes(elem, cor) {
  document.getElementById(elem.id).style.backgroundColor = cor;
  document.getElementById("series").style.backgroundColor = "";
  document.getElementById("tbSeries").setAttribute("hidden", true);

  document.getElementById("tbFilmes").removeAttribute("hidden");

  let listaFilmes = document.getElementById("listaFilmes");

  filmes.forEach((f) => {
    let tr = document.createElement("tr");
    let tdAno = document.createElement("td");
    tdAno.innerHTML = f.year;
    let tdTitulo = document.createElement("td");
    tdTitulo.innerHTML = f.title;
    let tdGenero = document.createElement("td");
    tdGenero.innerHTML = f.genre;
    let tdDuracao = document.createElement("td");
    tdDuracao.innerHTML = f.duration;
    let tdAvaliacao = document.createElement("td");
    tdAvaliacao.innerHTML = f.rating;
    tr.appendChild(tdAno);
    tr.appendChild(tdTitulo);
    tr.appendChild(tdGenero);
    tr.appendChild(tdDuracao);
    tr.appendChild(tdAvaliacao);
    listaFilmes.appendChild(tr);
  });
}

function btnSeries(elem, cor) {
  document.getElementById(elem.id).style.backgroundColor = cor;
  document.getElementById("filmes").style.backgroundColor = "";

  document.getElementById("tbFilmes").setAttribute("hidden", true);
  document.getElementById("tbSeries").removeAttribute("hidden");

  let listaSeries = document.getElementById("listaSeries");
  series.forEach((f) => {
    let tr = document.createElement("tr");
    let tdAno = document.createElement("td");
    tdAno.innerHTML = f.year;
    let tdTitulo = document.createElement("td");
    tdTitulo.innerHTML = f.title;
    let tdGenero = document.createElement("td");
    tdGenero.innerHTML = f.genre;
    let tdTemporadas = document.createElement("td");
    tdTemporadas.innerHTML = f.seasons;
    let tdEpisodios = document.createElement("td");
    tdEpisodios.innerHTML = f.episodes;
    let tdAvaliacao = document.createElement("td");
    tdAvaliacao.innerHTML = f.rating;
    tr.appendChild(tdAno);
    tr.appendChild(tdTitulo);
    tr.appendChild(tdGenero);
    tr.appendChild(tdTemporadas);
    tr.appendChild(tdEpisodios);
    tr.appendChild(tdAvaliacao);
    listaSeries.appendChild(tr);
  });
}
