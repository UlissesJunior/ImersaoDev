function adicionar() {

    var adicionar = document.getElementById("adicionar").value;
    
    if(adicionar.endsWith(".jpg") || adicionar.endsWith(".png") || adicionar.endsWith(".svg")) {
        var imagem = "<img src=" + adicionar + ">";
        var aluraflix = document.getElementById("aluraflix");
        aluraflix.innerHTML = aluraflix.innerHTML + imagem;
    } 
    else {
        console.error("Endereço errado");
    }

    document.getElementById("adicionar").value = "";

}