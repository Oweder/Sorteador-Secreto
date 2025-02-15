//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    // Validar a entrada
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualizar a lista de amigos no HTML
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente
    listaAmigos.innerHTML = "";

    // adicionar os nomes à lista no final
    for (let i = 0; i < amigos.length; i++) {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigos[i];
        listaAmigos.appendChild(novoItem);
    }
}

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Adicione amigos para realizar o sorteio.");
        return;
    }

    // Gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Resultado
    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}