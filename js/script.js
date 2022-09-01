// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  url.includes;
  if (url === href) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function abrirPergunta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  pergunta.setAttribute("aria-expanded", "true");
  resposta.classList.toggle("ativa");
  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", abrirPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);
