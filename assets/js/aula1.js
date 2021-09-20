const btn = document.querySelector("#send");
btn.addEventListener ("click", function(e) {
    e.preventDefault();
    const nota1 = document.querySelector("#nota1");
    var nota01 = nota1.value;
    const nota2 = document.querySelector("#nota2");
    var nota02 = nota2.value;
    const nota3 = document.querySelector("#nota3");
    var nota03 = nota3.value;
    const nota4 = document.querySelector("#nota4");
    var nota04 = nota4.value;

    var media = (parseInt(nota01) + parseInt(nota02) + parseInt(nota03) + parseInt(nota04))/4;
    document.querySelector(".media").innerHTML = "Média: " + media;
    
    console.log("Nota 1: " + nota01);
    console.log("Nota 2: " + nota02);
    console.log("Nota 3: " + nota03);
    console.log("Nota 4: " + nota04);
    
    console.log("Média: " + media);
});