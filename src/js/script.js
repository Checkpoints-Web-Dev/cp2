let imagens = [
  "src/assets/imagem1.jpg",
  "src/assets/imagem2.jpg",
  "src/assets/imagem3.jpg",
  "src/assets/imagem4.jpg",
  "src/assets/imagem5.jpg",
  "src/assets/imagem6.jpg",
  "src/assets/imagem7.jpg",
  "src/assets/imagem8.jpg",
  "src/assets/imagem9.jpg",
  "src/assets/imagem10.jpg",
  "src/assets/imagem11.jpg",
  "src/assets/imagem12.jpg",
];

let i = 0;

function slideShow() {
  document.getElementById("image").src = imagens[i];
  document.getElementById("image2").src = imagens[i + 1];
  document.getElementById("image3").src = imagens[i + 2];
  i += 3;

  if (i == imagens.length) {
    i = 0;
  }

  setTimeout("slideShow()", 3000);
}

slideShow();
