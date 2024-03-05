let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial()



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        //abaixo comando para selecionar elemento pelo Id e comando para remover atributo.
        document.getElementById('reiniciar').removeAttribute('disabled');
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

// função abaixo criada para reniciar jogo ao click do botão

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    //comando abaixo usado para selecionar botão reiniar no html e sempre desabilita-lo após reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true)
}











