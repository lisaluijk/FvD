// JavaScript Document

// stap 1: zoek de menu-button op en sla die op in een variabele
let buttonMenu = document.querySelector("nav button");
let ulMenu = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
buttonMenu.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
  ulMenu.classList.toggle("toonMenu");
}