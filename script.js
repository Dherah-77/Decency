const price = document.querySelector(".pop-up");

let scrollTreshold = 900; // Use `let` to allow reassignment

// Define the media query
const mediaQuery = window.matchMedia("(max-width: 480px)");

// Update the scroll threshold based on the media query
if (mediaQuery.matches) {
    scrollTreshold = 5;
}

// Function to handle scroll behavior
function handleScroll() {
    if (window.scrollY > scrollTreshold) {
        price.style.display = "block";
    } else {
        price.style.display = "none";
    }
}

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);

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



