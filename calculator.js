let expressao = '';
let operadorAtual = '';

function adicionarNumero(numero) {
    expressao += numero;
    atualizarDisplay();
}

function adicionarOperador(operador) {
    if (operadorAtual !== '') {
        calcular();
    }
    operadorAtual = operador;
    expressao += operador;
    atualizarDisplay();
}

function calcular() {
    try {
        const resultado = eval(expressao);
        expressao = resultado.toString();
        operadorAtual = '';
        atualizarDisplay();
    } catch (error) {
        expressao = '';
        operadorAtual = '';
        atualizarDisplay();
        alert('Erro ao calcular a expressão.');
    }
}

function limpar() {
    expressao = '';
    operadorAtual = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('resultado').value = expressao;
}
