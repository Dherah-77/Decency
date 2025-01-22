//  BUTTON POP-UP
const price = document.querySelector(".pop-up");

let scrollTreshold = 900; 


const mediaQuery = window.matchMedia("(max-width: 480px)");

if (mediaQuery.matches) {
    scrollTreshold = 5;
}

function handleScroll() {
    if (window.scrollY > scrollTreshold) {
        price.style.display = "block";
    } else {
        price.style.display = "none";
    }
};

window.addEventListener("scroll", handleScroll);

// ITEMS DROP-DOWN
const products = document.querySelectorAll(".products");
const productItems = document.querySelector(".ourprod");
const closed = document.querySelector(".close");

products.forEach((product) => {
  product.addEventListener("click", () => {
    productItems.style.display = "flex";
  });
});

closed.addEventListener("click", () => {
  productItems.style.display = "none";
});


const aboutts = document.querySelectorAll(".aboutt");
const about = document.querySelector(".about");
const close2 = document.querySelector(".abtclose");

aboutts.forEach((aboutt) => {
  aboutt.addEventListener("click", () => {
    about.style.display = "block";
    social.style.display = "none";
    listBack.style.display = "none";
  })
})

close2.addEventListener("click", () => {
  about.style.display = "none";
})



const contact = document.querySelector(".contact");
const contItem = document.querySelector(".cont");
const close3 = document.querySelector(".contclose")

contact.addEventListener("click", () => {
  contItem.style.display = "block";
  social.style.display = "none";
  listBack.style.display = "none";
})

close3.addEventListener("click", () => {
  contItem.style.display = "none";
})


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
