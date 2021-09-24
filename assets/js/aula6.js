var Player1 = {nome: "Player 1", vitorias:0, empates:0, derrotas:0, pontos:0};
var Player2 = {nome: "Player 2", vitorias:0, empates:0, derrotas:0, pontos:0};

Player1.pontos = calcponto(Player1);
Player2.pontos = calcponto(Player2);

function calcponto(jogador) {
    var pontos = (jogador.vitorias*3) + jogador.empates;
    return pontos;
}
console.log(Player1)

var jogadores = [Player1, Player2]

function ListaJogadores(jogadores) {
    var elemento = ""
    for (var x=0; x<jogadores.length; x++) {
        
    elemento +=     "<tr><td>" + jogadores[x].nome + "</td>"
    elemento +=     "<td>" + jogadores[x].vitorias + "</td>"
    elemento +=     "<td>" + jogadores[x].empates + "</td>"
    elemento +=     "<td>" + jogadores[x].derrotas + "</td>"
    elemento +=     "<td>" + jogadores[x].pontos + "</td>"
    elemento +=     "<td><button onClick='Vitoria("+ x +")'>Vitória</button></td>"
    elemento +=     "<td><button onClick='Empate("+ x +")'>Empate</button></td>"
    elemento +=     "<td><button onClick='Derrota("+ x +")'>Derrota</button></td>"
    elemento +=     "</tr>"
    }
    
    var TabelaJogadores = document.getElementById("tabelaJogadores");
    TabelaJogadores.innerHTML = elemento;
}

ListaJogadores(jogadores);

function Vitoria(x) {
    var jogador = jogadores[x]
    jogador.vitorias++
    jogador.pontos = calcponto(jogador)
    ListaJogadores(jogadores);
}

function Empate(x) {
    var jogador = jogadores[x]
    jogador.empates++
    jogador.pontos = calcponto(jogador);
    ListaJogadores(jogadores);
}

function Derrota(x) {
    var jogador = jogadores[x]
    jogador.derrotas++
    jogador.pontos = calcponto(jogador);
    ListaJogadores(jogadores);
}

// // Nome do Jogador
// function addname (){
//     const nomeplayer = document.querySelector("#nome");
// var jogador[x] = valmoeda.value;
// }
