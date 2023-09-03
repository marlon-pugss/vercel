let expressao = '';
const display = document.getElementById('display');

function adicionarNumero(numero) {
    expressao += numero;
    atualizarDisplay();
}

function calcular() {
    try {
        const resultado = eval(expressao);
        expressao = resultado.toString();
        atualizarDisplay();
    } catch (error) {
        expressao = '';
        atualizarDisplay();
        alert('Erro ao calcular a expressão.');
    }
}

function limpar() {
    expressao = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    display.value = expressao;
}
