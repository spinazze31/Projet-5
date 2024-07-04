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
let banners = document.querySelector(".banner-img");
let index = 0;

arrowNext.addEventListener("click", (e) => {
  index++;
  console.log(index);
  console.log(slides);
  console.log(slides[index]);
  console.log(slides[index].image);
  banners.src = "../assets/images/slideshow/" + slides[index].image;
});

/*arrows.forEach((images) => {
  images.addEventListener("click", (e) => {
    console.log(images);
    const imgNext = e.target.id === "next" ? 1 : -1;
    console.log(imgNext);
  });
});*/

function Createdots(slides) {
  let Dots = document.createElement("img");
  Dots.setAttribute("class", "dot");
  Dots.setAttribute("id", "dot" + i);
  document.getElementById("insertdots").appendChild(Dots);
}

for (i = 0; i < slides.length; i++) {
  Createdots(i);
}

let Dots = document.getElementById("dot0");
Dots.classList.add("dot_selected");

// let newImg = document.createElement("img");
// let newtxt = document.createElement("p");
// newImg.setAttribute("src", "../assets/images/slideshow/slide2.jpg");
// newImg.setAttribute("class", "banner-img");

// document.getElementById("banner").appendChild(newImg);
// document.getElementById("banner").appendChild(newtxt);

// newImg = document.createElement("img");
// newImg.setAttribute("src", "../assets/images/slideshow/slide3.jpg");
// newImg.setAttribute("class", "banner-img");
// document.getElementById("banner").appendChild(newImg);

// newImg = document.createElement("img");
// newImg.setAttribute("src", "../assets/images/slideshow/slide4.png");
// newImg.setAttribute("class", "banner-img");
// document.getElementById("banner").appendChild(newImg);
