const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const proximaPergunta = document.getElementById("proximo");
const mensagem = document.getElementById("message");
const containerPerguntas = document.getElementById("container-perguntas");
const containerResultado = document.getElementById("container-resultado");
const listaResultado = document.getElementById("lista-resultado");
const reiniciarBotao = document.getElementById("inicio-btn");

const questoes = [
  "1. Onde você dirige com mais frequência?",
  "2. Qual é sua prioridade ao comprar um carro?",
  "3. Qual tipo de carroceria você prefere?",
  "4. Qual será o uso principal do carro?",
  "5. Com que frequência você viaja com passageiros ou família?",
  "6. Quão importante é o espaço interno para você?",
  "7. Você já dirige carros automáticos ou elétricos atualmente?",
  "8. Qual seria o principal motivo para comprar um carro elétrico?",
  "9. A autonomia da bateria é um fator decisivo para você?",
  "10. Qual o seu orçamento estimado para a compra?",
];

let perguntas = 0;
const respostas = [];

function mostrarPergunta() {
  if (perguntas < questoes.length) {
    pergunta.textContent = questoes[perguntas];
    resposta.value = "";
    mensagem.textContent = "";
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  containerPerguntas.classList.add("hidden");

  containerResultado.classList.remove("hidden");

  listaResultado.innerHTML = "";

  questoes.forEach((questoes, index) => {
    const listaItem = document.createElement("li");

    listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua resposta: <span>${respostas[index]}</span>`;

    listaResultado.appendChild(listaItem);
  });
}

function nextQuestao(e) {
  e.preventDefault();
  const respostaAtual = resposta.value.trim();
  if (respostaAtual === "") {
    mensagem.textContent = "Por favor, digite sua resposta.";
    return;
  }
  respostas.push(respostaAtual);
  perguntas++;
  mostrarPergunta();
}

function reiniciarQuiz() {
  perguntas = 0;
  respostas.length = 0;
  containerResultado.classList.add("hidden");
  containerPerguntas.classList.remove("hidden");
  mostrarPergunta();
}

proximaPergunta.addEventListener("click", nextQuestao);
reiniciarBotao.addEventListener("click", reiniciarQuiz);

mostrarPergunta();
