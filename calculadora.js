let valorAtual = "";
let operadorAtual = "";
let valorAnterior = "";
const display = document.getElementById("valorAtual");

function inverterSinal() {
    valorAtual = valorAtual * -1;
    atualizarDisplay();
}

function concatenar(valor) {
    valorAtual += valor;
    atualizarDisplay();
}

function adicionarOperacao(operacao) {
    operadorAtual = operacao;
    valorAnterior = valorAtual;
    valorAtual = "";
}

function atualizarDisplay() {
    display.textContent = valorAtual;
}

function zerarDisplay() {
    display.textContent = "0";
}

function exibirErro() {
    display.textContent = "Error";
}

function cancelarOperacao() {
    valorAnterior = "";
    valorAtual = "";
    valorAnterior = "";
    zerarDisplay();
}

function calcular() {
    console.log("operadorAtual: " + operadorAtual);
    console.log("valorAtual: " + valorAtual);
    console.log("valorAnterior: " + valorAnterior);

    if (valorAtual != "" && valorAnterior != "" && operadorAtual != ""){
        if (operadorAtual == "+") {
            valorAtual = parseFloat(valorAtual) + parseFloat(valorAnterior);
            atualizarDisplay();
        } else if (operadorAtual == "-") {
            valorAtual = parseFloat(valorAnterior) - parseFloat(valorAtual);
            atualizarDisplay();
        } else if (operadorAtual == "*") {
            valorAtual = parseFloat(valorAtual) * parseFloat(valorAnterior);
            atualizarDisplay();
        } else if (operadorAtual == "/") {
            if (valorAtual != '0'){
                valorAtual = parseFloat(valorAnterior) / parseFloat(valorAtual);
                atualizarDisplay();
            } else {
                valorAtual = '';
                exibirErro();
            }
        }
    }
}
