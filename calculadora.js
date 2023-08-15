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

function cancelarOperacao() {
    valorAnterior = "";
    valorAtual = "";
    valorAnterior = "";
    zerarDisplay();
}

function calcular() {
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
        valorAtual = parseFloat(valorAnterior) / parseFloat(valorAtual);
        atualizarDisplay();
    }
}