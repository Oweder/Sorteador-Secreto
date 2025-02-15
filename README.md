Sorteio de Amigo Secreto

Este é um pequeno programa em JavaScript para sortear um amigo secreto. Os participantes inserem seus nomes, e o programa sorteia aleatoriamente um deles.

Funcionalidades

Adicionar nomes à lista de participantes.

Exibir a lista de amigos adicionados.

Sortear um nome aleatoriamente.

Como Usar

Insira o nome de um participante no campo de entrada e clique em "Adicionar".

A lista de participantes será exibida abaixo.

Clique no botão "Sortear" para escolher um participante aleatoriamente.

O nome sorteado será exibido na tela.

Tecnologias Utilizadas

JavaScript: Manipulação de arrays e DOM.

HTML & CSS (se aplicável): Estruturação e estilização da página.

Exemplo de Código

let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos para realizar o sorteio.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    document.getElementById('resultado').innerHTML = `<li>${amigos[indiceAleatorio]}</li>`;
}

Como Executar

Salve o código em um arquivo .html com a estrutura adequada.

Abra o arquivo no navegador.

Interaja com os botões para adicionar nomes e realizar o sorteio.

Criado por Wederson Pereira 
Esse foi um projeto de conclusão de um curso Alura em Parceria com a Oracle.

Tudo foi desafiador pois é uma iniciação na linguagem, as questões de listas ( array) a inserção e limpeza do campo,
são detalhes que vamos compreeendendo de forma intuitiva e com auxílio. O return também é essencial pra validar o case e prosseguir da forma correta.
São estes alguns pontos que gostaria de levantar.
