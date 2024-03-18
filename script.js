let usernameElement = document.querySelector("#username");
let respostaBruxa = document.querySelector("#resposta");
let botaoEnviar = document.querySelector("#botao");

const colocarNomeNaTela = () => {
  let nome = prompt("Qual o seu nome?");
  nome === null || nome === "" ? (nome = "estranho") : (usernameElement.textContent = nome);
};

colocarNomeNaTela();


const gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 6);
};

//mudando as respostas de acordo com o número aleatório gerado
const mostrarRespostas = () => {
  let randomNumber = gerarNumeroAleatorio();

  switch (randomNumber) {
    case 0:
      respostaBruxa.textContent = "Com certeza";
      break;
    case 1:
      respostaBruxa.textContent = "Sim";
      break;
    case 2:
      respostaBruxa.textContent = "Não";
      break;
    case 3:
      respostaBruxa.textContent = "Talvez";
      break;
    case 4:
      respostaBruxa.textContent = "Não é possível dizer agora";
      break;
    case 5:
      respostaBruxa.textContent = "Nem espere por isso";
      break;
  }

};


//ouvindo o clique do botão e chamando a função das respostas caso o input n esteja vazio
botaoEnviar.addEventListener("click", () => {
  let inputPergunta = document.querySelector("#pergunta").value;
  
  if(inputPergunta === ""){
    alert("Digite sua pergunta!");
  } else {
    mostrarRespostas();
  }
});

document.getElementById("resposta").classList.add("mostrar");

console.log("Valor do inputPergunta:", inputPergunta);

