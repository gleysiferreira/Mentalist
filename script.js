var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    var resultado = "Excelente, você acertou.";
  } else if (chute > 10 || chute < 0 || isNaN(chute)) {
    var resultado = "Você deve digitar um número de 0 a 10";
  } else if (chute != numeroSecreto && chute > numeroSecreto) {
    --tentativas;
    var resultado =
      "O número é menor do que " +
      chute +
      ". Tentativas restantes: " +
      tentativas;
  } else if (chute != numeroSecreto && chute < numeroSecreto) {
    --tentativas;
    var resultado =
      "O número é maior do que " +
      chute +
      ". Tentativas restantes: " +
      tentativas;
  }

  if (tentativas == 0) {
    var resultado = "Ops...o número secreto era " + numeroSecreto;
  }

  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = resultado;
}
