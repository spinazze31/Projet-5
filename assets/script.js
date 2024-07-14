const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrowNext = document.querySelector("#next");
let arrowPrev = document.querySelector("#prev");
let banners = document.querySelector(".banner-img");
let pText = document.querySelector("#banner p");
let spanText = document.querySelector("#banner span");
let dotAdded = document.getElementById("dot0");
let dotRemove = document.getElementById("dot1");
let index = 0;

function carouselImage(index) {
  banners.src = "../assets/images/slideshow/" + slides[index].image;
  pText.innerHTML = slides[index].tagLine;
  spanText.innerHTML = slides[index].tagLine;
}

function dotImageRemove(index) {
  dotRemove = document.getElementById("dot" + index);
  dotRemove.classList.remove("dot_selected");
}

function dotImageSelected(index) {
  dotAdded = document.getElementById("dot" + index);
  dotAdded.classList.add("dot_selected");
}

arrowNext.addEventListener("click", (e) => {
  dotImageRemove(index);
  index++;
  if (index >= slides.length) index = 0;
  carouselImage(index);
  dotImageSelected(index);
});

arrowPrev.addEventListener("click", (e) => {
  dotImageRemove(index);
  index--;
  index > 0;
  if (index < 0) index = slides.length - 1;
  carouselImage(index);
  dotImageSelected(index);
});

function createDot(slides) {
  let dot = document.createElement("i");
  dot.setAttribute("class", "dot");
  dot.setAttribute("id", "dot" + i);
  document.getElementById("insertdots").appendChild(dot);
}

for (i = 0; i < slides.length; i++) {
  createDot(i);
}

let dot = document.getElementById("dot0");
dot.classList.add("dot_selected");
