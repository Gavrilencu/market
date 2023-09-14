let menu = document.querySelector(".menu");
let showCart = document.querySelector(".showCart");

function openMenu() {
  var x = document.getElementById("showCart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
openMenu();
let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
let footer = document.querySelector(".footer");

function darkTheme() {
  if (header.style.background === "black") {
    header.style.background = "#B0B0B0";
    logo.style.color = "black";
    footer.style.background = "#B0B0B0";
  } else {
    header.style.background = "black";
    logo.style.color = "white";
    footer.style.background = "black";
  }
}
darkTheme();

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const slideWidth = images[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function updateSlider() {
  const translateX = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

setInterval(nextSlide, 3000); 
