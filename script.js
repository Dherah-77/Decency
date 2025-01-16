const price = document.querySelector(".pop-up");

const scrollTreshold = 900;

window.addEventListener("scroll", () => {
    if(window.scrollY > scrollTreshold) {
        price.style.display = "block";
    } else {
        price.style.display = "none";
    }
})

const cont = document.querySelector(".container2");
const scroller = document.querySelector(".scroller");

// PHONE SIZE DESIGN

const menu = document.querySelector(".menu");
const button = document.querySelector(".icon");
const social = document.querySelector(".socials");
const listBack = document.querySelector(".hdli");

menu.addEventListener("click", () => {
    if (listBack.style.display === "flex" && social.style.display === "flex") {
      listBack.style.display = "none";
      social.style.display = "none";
    } else {
      listBack.style.display = "flex";
      social.style.display = "flex";
    }
  });



