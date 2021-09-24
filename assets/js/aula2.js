const btn = document.querySelector("#send");
btn.addEventListener ("click", function(e) {
    e.preventDefault();

    const valmoeda = document.querySelector("#moeda");
    var real = valmoeda.value;

    var dolar = (parseFloat(real)) / 5.25;
    var dolarconvert = dolar.toFixed(2);
    var euro = (parseFloat(real))/6.20;
    var euroconvert = euro.toFixed(2);
    var bitcoin = (parseFloat(real))*0.0000041;
    var bitconvert = bitcoin.toFixed(6);

    document.querySelector(".real").innerHTML = "Real: R$" + parseFloat(real);
    document.querySelector(".dolar").innerHTML = "Dólar: $" + parseFloat(dolarconvert);
    document.querySelector(".euro").innerHTML = "Euro: " + parseFloat(euroconvert) + " €";
    document.querySelector(".bitcoin").innerHTML = "Bitcoin: " + parseFloat(bitconvert) + " ₿";
});