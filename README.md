# Procesverslag

## Jij
<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Lisa Luijkman

  #### Je startniveau:
  rood

  #### Je focus:
  surface plane
</details>


## Je website
<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
   https://www.escadrille.org/en/home/  

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/eerste-pagina.png" width="375px" alt="dit is een bedrijf van studenten die bedrijven adviezen geven en onderzoeken uitvoeren">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/tweede-pagina.png" width="375px" alt="hier kan je een quote aanvragen">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Ik merkte dat ik het lastig vind de screenreader te gebruiken maar dat dit nog meer werd versterkt door mijn gekozen website. De website crasht soms waardoor ik dan niet verder kan en alleen een wit scherm zie. De linkjes zijn soms goed gelabeld maar als er een foto wordt gebruikt als link, bijvoorbeeld bij de socialmedia icoontjes hoor je alleen: "link". Ook hebben ze een lijst met bedrijven waarmee ze samenwerken waar je ook alleen maar een logo ziet zonder tekst. In de screenreader hoor je dan ook: "link logo" dit is dus totaal niet toegankelijk omdat je niet alleen niet weet waar je heen gaat maar ook nog op een hele andere website terecht komt. 
  Bij het doorlopen van de headings loop ik de hele tijd vast en kom ik er niet doorheen. De headings die ik kan horen zijn op zich prima maar niet altijd even logisch. 

  <img src="readme-images/wcag-1.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/wcag-2.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/wcag-3.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/wcag-4.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/wcag-5.jpg" width="375px" alt="ingevulde wcag test">

Uit de wcag checklist kwamen de volgende punten:
- de links hebben nog geen goed (aria)label
- menu wilt niet open als je erdoorheen tabt
- headings zijn niet overal logisch
- alt tekst moet heel veel beter want die ontbreekt
- prefers-reduced-motion werkt helemaal niet
- contrast is bijna overal goed
</details>


## Breakdownschets (week 1)
<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets-1.png" width="375px" alt="breakdown van de hele pagina">
  <img src="readme-images/breakdownschets-2.png" width="375px" alt="breakdown van de hele pagina">


  ### dynamisch deel (bijv menu): 
  <img src="readme-images/menu.jpg" width="375px" alt="breakdown van het menu">
  <img src="readme-images/breakdownschets-secties.jpg" width="375px" alt="breakdown van html onderdelen">
</details>


## Voortgang 1 (week 2)
<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student koen      
   - html
   - navigatie
   - structuur css

  student Lisa
  -  html doornemen
  - nog even kijken naar menu
  - header welke soort foto voor het logo?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1: navigatie bar werkt niet met sticky en fixed --> de ul uit de header halen
  - punt 2: foto van logo --> mag met img maar dan lege alt of met before (doe het wel consistent)
  - punt 3: hoe maak ik de bewegende tekst? --> bewegende tekst met marquee, maar dan met display block enzo en reduces motion
 
  <img src="readme-images/aantekeningen-hoorcollege.jpg" width="375px" alt="aantekeningen hoorcollege toegankelijkheid">
</details>


## Voortgang 2 (week 3)
<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>


  ### Agenda voor meeting
  samen met je groepje opstellen

  student koen      
   -html doornemen
   - responsive maken articles
   - carrousel 

  student Lisa
  -  html doornemen
  - nog even kijken naar menu
  - header welke soort foto voor het logo?
  - carrousel image


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1: marquee margin -> negatief
  - punt 2: background image svg -> aparte file aanmaken
  - nog een punt : discover in de article -> link maken en dan met java alles klikbaar maken
  - html controleren -> alle sections moeten een h2 hebben, de ul van de nav mag tussen de header en main in, veel van mijn articles zijn geen articles (alleen dingen die los kunnen staan zijn articles)

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  Het is al een stuk beter dan de orginele site, vooral in html -> kopjes, links, arialabels

  Ik kreeg van Teun een paar tips die ik zo veel mogelik heb verbeterd:
  - ipv pagina naam escadrille homepage -> home escadrille, dan staat de belagntijkste informatie vooraan
  - misschien nog de focus styling aanpassen
  - het menu glitcht op telefoon als je de orientatie aanpast


  <img src="readme-images/2wcag-1.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/2wcag-2.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/2wcag-3.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/2wcag-4.jpg" width="375px" alt="ingevulde wcag test">
  <img src="readme-images/2wcag-5.jpg" width="375px" alt="ingevulde wcag test">

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Agenda voor meeting
  samen met je groepje opstellen

  student koen      
   - javascript menu kapot
  
  student Sol
  - font downloaden

  student Lisa
  -  order nieuwsartikelen
  - hoe de tweede carrousel maken?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1 -> fancy carrousel, codepen
  - punt 2 -> order, snappen student assistenten ook niet
  - punt 3 -> html checken, geen styling in svg, geen lege alt (of toch wel?) 
  - ...
</details>


## Eindgesprek (week 5)
<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/krakterestiek1.png" width="375px" alt="header met bewegende images">
  <img src="readme-images/karakterestiek2.png" width="375px" alt="unieke carrousel">

  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Wat hierboven bij karakteristiek staat ging al erg goed en benk ik erg trots op, mar ook het menu, het was even uitvogelen maar uiteindelijk ben ik trots op het resultaat. 
  <img src="readme-images/goed-menu.png" width="375px" alt="top">

  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  Hoewel het me is gelukt de carrousel deels te maken is het me niet gelukt een terugknop werkend te krijgen. DIt omdat ik met verschillende states werk en het te veel tijd kost dit uit te vogelen.
   <img src="readme-images/karakterestiek2.png" width="375px" alt="bummer">


## Bronnenlijst
<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1, animatie scrollen : https://codepen.io/Nienke-the-styleful/pen/zYgYomN 
  2. bron 2, carrousel 1 : https://codepen.io/teun-dames/pen/MWNWJro 
  3. bron 3, menu : https://codepen.io/lisa_luijk/pen/OJeGJxE
</details>