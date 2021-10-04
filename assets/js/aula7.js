var carta1 = {
    nome: "Charmander",
    atributos: {
        Ataque: 7,
        Defesa: 8, 
        Poder: 6
    }
};

var carta2 = {
    nome: "Bulbassauro",
    atributos: {
        Ataque: 9,
        Defesa: 8, 
        Poder: 2
    }
};

var carta3 = {
    nome: "Squirtle",
    atributos: {
        Ataque: 5,
        Defesa: 9, 
        Poder: 10
    }
};
var cartas = [carta1,carta2,carta3]
var cartamaquina;
var cartaplayer;

function SortearCarta() {
    var NCartaMaquina = parseInt(Math.random() * cartas.length)
    cartamaquina = cartas[NCartaMaquina]

    var NCartaPlayer = parseInt(Math.random() * cartas.length)
    while (NCartaPlayer == NCartaMaquina) {
        NCartaPlayer = parseInt(Math.random() * cartas.length)
    }
    cartaplayer = cartas[NCartaPlayer]

    console.log(cartamaquina)
    console.log(cartaplayer)

    Opcoes()
}

function Opcoes() {
    var opcoes = document.getElementById("opcoes")
    var OpcoesTxt = ""
    for (var atributos in cartaplayer.atributos) {
        console.log(atributos)
        OpcoesTxt += 
        "<input type='radio' name='atributos' value='" + atributos +  "'>" + "<label style='display:inline;padding-left:8px'>" + atributos + "</label>" + "<br>"
    }
    opcoes.innerHTML = OpcoesTxt
}

function AtributoSelecionado () {
    var RadioSelect = document.getElementsByName("atributos");
    for(var i=0; i<RadioSelect.length; i++) {
        if(RadioSelect[i].checked == true) {
            return RadioSelect[i].value
        }
    }

}

function jogar () {
    var Select = AtributoSelecionado()
    var resultado = document.getElementById("resultado")
    var cartaplayervalue = cartaplayer.atributos[Select]
    var cartamaquinavalue = cartamaquina.atributos[Select]

    if (cartaplayervalue > cartamaquinavalue) {
        resultado.innerHTML = "<p> Resultado: Você Venceu </p>"
    } else if (cartaplayervalue < cartamaquinavalue) {
        resultado.innerHTML = "<p> Resultado: Você Perdeu </p>"
    } else if (cartaplayervalue < cartamaquinavalue) {
        resultado.innerHTML = "<p> Resultado: Empatou :( </p>"
    }
}


    // document.getElementById("#btnJogar").disabled = false;