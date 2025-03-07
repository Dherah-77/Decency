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
  });
});

close2.addEventListener("click", () => {
  about.style.display = "none";
});



const contacts = document.querySelectorAll(".contact");
const contItem = document.querySelector(".cont");
const close3 = document.querySelector(".contclose")

contacts.forEach((contact) => {
  contact.addEventListener("click", () => {
    contItem.style.display = "block";
  });
});

close3.addEventListener("click", () => {
  contItem.style.display = "none";
});

const priceDrop = document.querySelector(".prices");
const priceClose = document.querySelector(".priceclose");
const popUp = document.querySelector(".pop-up");

popUp.addEventListener("click", () => {
  priceDrop.style.display = "flex";
})

priceClose.addEventListener("click", () => {
  priceDrop.style.display = "none";
})



// PHONE SIZE DESIGN

const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".showsd");
const closeSd = document.querySelector(".closesd");

menu.addEventListener("click", () => {
    if (sideBar.style.display === "none") {
        sideBar.style.display = "flex";
        menu.style.display = "none";
        closeSd.style.display = "flex";
    } else {
        sideBar.style.display = "none";
        menu.style.display = "flex";
        closeSd.style.display = "none";
    }
});

closeSd.addEventListener("click", () => {
    sideBar.style.display = "none";
    menu.style.display = "flex";
    closeSd.style.display = "none";
});

  products.forEach((product) => {
    product.addEventListener("click", () => {
      sideBar.style.display = "none";
      menu.style.display = "flex";
      closeSd.style.display = "none";
    });
  });
  
  aboutts.forEach((about) => {
    about.addEventListener("click", () => {
      sideBar.style.display = "none";
      menu.style.display = "flex";
      closeSd.style.display = "none";
    });
  });
  
  contacts.forEach((contact) => {
    contact.addEventListener("click", () => {
      sideBar.style.display = "none";
      menu.style.display = "flex";
      closeSd.style.display = "none";
    });
  });