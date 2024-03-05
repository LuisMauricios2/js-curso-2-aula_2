let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
// função transforma o valor do chute em str vazia novamente
function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}











