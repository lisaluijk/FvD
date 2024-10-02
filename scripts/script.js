// JavaScript Document

// hamburger menu
const buttonMenu = document.querySelector("nav button");
const ulMenu = document.querySelector("nav ul");
console.log(buttonMenu)

// eerste carrousel
const nextButton = document.querySelector("section:nth-of-type(4) button:nth-of-type(2)");
const prevButton = document.querySelector("section:nth-of-type(4) button:nth-of-type(1)");
const theList = document.querySelector("section:nth-of-type(4) > ul");
const anEl = document.querySelector("section:nth-of-type(4) > ul > li");
const elWidth = anEl.offsetWidth;

// tweede carrousel
const nextCardButton = document.querySelector("section:nth-of-type(6) button:last-of-type");
const prevCardButton = document.querySelector("section:nth-of-type(6) button:first-of-type");
const firstCard = document.querySelector("section:nth-of-type(6) ul li:nth-of-type(1)");
const secondCard = document.querySelector("section:nth-of-type(6) ul li:nth-of-type(2)");
const thirdCard = document.querySelector("section:nth-of-type(6) ul li:nth-of-type(3)");
let beurt = 2;

// animatie elementen in beeld
const h3 = document.querySelectorAll("h3");
const li = document.querySelectorAll("section:nth-of-type(5) ul li");
const img = document.querySelectorAll("section:nth-of-type(7)  article img");


// eventlisteners
buttonMenu.onclick = toggleMenu;

nextButton.onclick = nextEl;
prevButton.onclick = prevEl;

nextCardButton.onclick = newCard;

// functions

// bron: https://codepen.io/lisa_luijk/pen/OJeGJxE
function toggleMenu() {
  ulMenu.classList.toggle("toonMenu");
  buttonMenu.classList.toggle("toonMenu");
}

// bron: https://codepen.io/teun-dames/pen/MWNWJro 
function nextEl(){
	theList.scrollLeft = theList.scrollLeft + elWidth;
}
function prevEl(){
	theList.scrollLeft = theList.scrollLeft - elWidth; 
}

function newCard() {
  if (beurt == 1) {
    firstCard.classList.add("flyIn");
    thirdCard.classList.replace("flyIn", "wait");
    secondCard.classList.remove("wait");
    beurt ++;
  }
  else if ( beurt == 2) {
    secondCard.classList.add("flyIn");
    firstCard.classList.replace("flyIn", "wait");
    thirdCard.classList.remove("wait");
    beurt ++;
  } else if (beurt == 3) {
    thirdCard.classList.add("flyIn");
    secondCard.classList.replace("flyIn", "wait");
    firstCard.classList.remove("wait");
    beurt = 1;
  }
}

// animatie elementen in beeld
//bron: https://codepen.io/Nienke-the-styleful/pen/zYgYomN 
const observer = new IntersectionObserver((entries) => {
  entries.forEach ((entry) => {
    const intersecting = entry.isIntersecting;
    
    if(intersecting){
           entry.target.classList.add("inbeeld");
    }
  });
});

h3.forEach((h3) => {
  observer.observe(h3);
});

li.forEach((li) => {
  observer.observe(li);
});

img.forEach((img) => {
  observer.observe(img);
});