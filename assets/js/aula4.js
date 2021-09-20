var filmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Cocofilme.png/250px-Cocofilme.png", 
              "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", 
              "https://upload.wikimedia.org/wikipedia/pt/thumb/1/17/Soul_ver5.jpg/250px-Soul_ver5.jpg", 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXXSprQ3EcHdri6WDStFpLL1hweHjjENp1AQv3ZNGa5JCm8dn", 
              "https://upload.wikimedia.org/wikipedia/pt/thumb/2/23/Capa_Avatar_Livro_3.png/240px-Capa_Avatar_Livro_3.png",
              "https://animetv.com.br/img/Pokemon-XYZ.jpg", 
              "https://observatoriodeseries.uol.com.br/wp-content/uploads/2021/07/What-If-691x1024.jpeg",  
              "https://portalf5.com.br/v2017/content/uploads/2021/03/loki-poster-novo-691x1024-1.jpg"];

for(x=0;x<filmes.length;x++) {
    document.write("<img src=" + filmes[x] + ">" );

}
    for(x=x+4;x<filmes.length;x++) {
        document.write("<p>");
    }
