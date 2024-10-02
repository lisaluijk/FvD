// JavaScript Document

// hamburger menu
const buttonMenu = document.querySelector("nav button");
const ulMenu = document.querySelector("nav ul");

// eerste carrousel
const nextButton = document.querySelector("section:nth-of-type(4) button:nth-of-type(2)");
const prevButton = document.querySelector("section:nth-of-type(4) button:nth-of-type(1)");
const theList = document.querySelector("section:nth-of-type(4) > ul");
const anEl = document.querySelector("section:nth-of-type(4) > ul > li");
const elWidth = anEl.offsetWidth;

// tweede carrousel
const nextCardButton = document.querySelector("section:nth-of-type(6) button:last-of-type");
const firstCard = document.querySelector("section:nth-of-type(6) ul li:nth-of-type(1)");
const secondCard = document.querySelector("section:nth-of-type(6) ul li:nth-of-type(2)");
const thirdCard = document.querySelector("section:nth-of-type(6) ul li:nth-of-type(3)");
let beurt = 2;

// eventlisteners
buttonMenu.onclick = toggleMenu;

nextButton.onclick = nextEl;
prevButton.onclick = prevEl;

nextCardButton.onclick = newCard;

// functions
function toggleMenu() {
  ulMenu.classList.toggle("toonMenu");
  buttonMenu.classList.toggle("toonMenu");
}

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

