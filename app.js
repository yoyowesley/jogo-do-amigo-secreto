let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já está na lista!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    exibirNomes();
}

function exibirNomes() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    amigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        listaElement.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    exibirNomes();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione nomes à lista antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    document.getElementById("nomesDaLista").textContent = `Sorteado: ${nomeSorteado}`;
}