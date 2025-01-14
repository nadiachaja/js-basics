# Titel
JS Challenge - Toevoegen Verwijderen Tellen

## Deel 1 - Toevoegen Verwijderen Tellen

doelen:
- als er op een character geklikt wordt dan het character toevoegen aan het team
- een character ook weer uit de lijst kunnen verwijderen
- bijhouden (tellen) hoe vol het team is
- als het team compleet is de character buttons disablen
- als het team compleet is dat duidelijk laten zien


### Stap 1a - Op alle Character buttons kunnen klikken

- zoek met querySelectorAll in de character-section's alle buttons op

- met forEach aan alle button een evenListener toevoegen
- daarin de functie addCharacterToList aanroepen


### Stap 1b - Het character toevoegen aan het team

- zoek met querySelector in de team-section section de lijst (ul) op

in de addCharacterToList functie

- sla de button waarop geklikt is op (event.currentTarget)
- zoek in de button de img op
- zoek de naam van het character op (de alt van de img)
- maak een clone van de img

- zoek in de teamList de eerste lege li op (:empty)
- voeg de clone toe aan de gevonden li


### Stap 1c - Counter en Progress verhogen

- zoek in de #team-counter de span op
- zoek het progress element op

in de addCharacterToList functie

- roep de functie updateTeamCounterAndProgress aan

in de updateTeamCounterAndProgress

- verhoog de value van het progress element met 1

- sla de huidige waarde van de teamcounter op (textContent)
- bereken de nieuwe waarde voor de teamcounter op (huidige waarde - 1)
- ken de nieuwe waarde toe aan de teamcounter (textContent)


### Stap 1d - Een delete button toevoegen

in de addCharacterToList functie

- creeer een button
- gebruik de naam van het character in een mooi aria-label voor de button
- voeg een eventListener toe aan de button
- daarin de functie deleteCharacterFromList aanroepen

- voeg de button toe aan de gevonden li

in de deleteCharacterFromList functie

- sla de delete button waarop geklikt is op (event.currentTarget)
- zoek de parent (li) van de button iop (closest)
- zoek in de li de img op

- verwijder de img (remove)
- verwijder de delete button


### Stap 1e - Counter en Progress verhogen en verlagen

in de deleteCharacterFromList functie

- roep de functie updateTeamCounterAndProgress aan
- geef de waarde -1 mee als argument

in de addCharacterToList functie

- geef de waarde 1 mee als argument aan updateTeamCounterAndProgress

in de updateTeamCounterAndProgress functie

- neem een parameter (delta) op in de functie definitie
- vervang de 1 en -1 door delta


### Stap 1f - Character buttons disablen als team is compleet

in de addCharacterToList en deleteCharacterFromList functie

- roep de functie updateInteractivityOfList aan

in de functie updateInteractivityOfList

- zoek in de teamList de eerste lege li op (:empty)
  - als er een leeg slot gevonden wordt is het team niet compleet
  - als er geen leeg slot gevonden wordt is het team compleet
- als het team compleet is disable dan alle character buttons (forEach en .disabled)
- als het team niet compleet is enable dan alle character buttons (forEach en .disabled)


### Stap 1g - Heel duidelijk maken dat team compleet is

in de addCharacterToList en deleteCharacterFromList functie

- roep de functie updateCompletenessOfTeam aan

in de functie updateCompletenessOfTeam

- zoek in de teamList de eerste lege li op (:empty)
  - als er een leeg slot gevonden wordt is het team niet compleet
  - als er geen leeg slot gevonden wordt is het team compleet
- als het team compleet is voeg dan de class (is-compleet) toe aan de teamList (classList)
- als het team niet compleet is verwijder dan de class (is-compleet) van de teamList (classList)



## Deel 2 - Scrollen door de character lijsten

doelen:
- als een character list aan het begin is dan de naar-links button disablen
- als een character list aan het eind is dan de naar-recht button disablen
- als de hele list op het scherm past dan de buttons verbergen


to do's:
- als de pagina geladen is, checken of de hele lijst op het scherm past, of de lijst aan het begin is, of de lijst aan het einde is
- als de browser ge-resize-d wordt, checken of de hele lijst op het scherm past, of de lijst aan het begin is, of de lijst aan het einde is
- als een lijst ge-scroll-ed wordt, checken of de lijst aan het begin is, of de lijst aan het einde is
- als er op naar-link of naar-rechts geklikt wordt, checken of de lijst aan het begin is, of de lijst aan het einde is



## Bronnen

icons: https://www.flaticon.com/packs/fairytale-42

