var SecretNumber = parseInt(Math.random() *11);
 
const btn = document.querySelector("#send");
btn.addEventListener ("click", function(e) {
    e.preventDefault();
   
    var chute = parseInt(document.querySelector("#chute").value);

    if(SecretNumber == chute) {
        document.querySelector(".result").innerHTML = "Parabéns, você acertou o número secreto";
    }
    else {
        document.querySelector(".result").innerHTML = "Você errou, tente novamente";
    }

    if(chute > 10 || chute < 0) {
        document.querySelector(".result").innerHTML = "O número deve ser >= 0 e <= 10";
    }

});
