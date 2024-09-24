// JavaScript Document

// stap 1: zoek de menu-button op en sla die op in een variabele
let buttonMenu = document.querySelector("nav button");
let ulMenu = document.querySelector("section:nth-child(1)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
buttonMenu.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
  ulMenu.classList.toggle("toonMenu");
  buttonMenu.classList.toggle("toonMenu");
}

const nextButton = document.querySelector("section:nth-child(4) button:nth-of-type(2)");
const prevButton = document.querySelector("section:nth-child(4) button:nth-of-type(1)");
const theList = document.querySelector("section:nth-child(4) > ul");
const anEl = document.querySelector("section:nth-child(4) > ul > li");
const elWidth = anEl.offsetWidth;

function nextEl(){
	theList.scrollLeft = theList.scrollLeft + elWidth;
}

function prevEl(){
	theList.scrollLeft = theList.scrollLeft - elWidth; 
}

nextButton.onclick = nextEl;
prevButton.onclick = prevEl;