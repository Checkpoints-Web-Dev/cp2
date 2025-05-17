let imagens = [
  "src/assets/imagem1.jpg",
  "src/assets/imagem2.jpg",
  "src/assets/imagem3.jpg",
  "src/assets/imagem4.jpg",
  "src/assets/imagem5.jpg",
  "src/assets/imagem6.jpg",
  "src/assets/imagem7.jpg",
  "src/assets/imagem8.jpg",
];

let i = 0;

function slideShow() {
  document.getElementById("image").src = imagens[i];
  i++;
  console.log(i);
  if (i == imagens.length) {
    i = 0;
  }

  setTimeout("slideShow()", 3000);
}

slideShow();
