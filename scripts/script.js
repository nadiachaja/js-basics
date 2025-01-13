/**************************************/
/* ADD/DELETE CHARACTERS TO/FROM TEAM */
/**************************************/

const characterButtons = document.querySelectorAll(".character-section ul button");
const teamList = document.querySelector(".team-section ul");

const teamCounter = document.querySelector("#team-counter span");
const teamProgress = document.querySelector("progress");



// CLICK ON CHARACTER BUTTON
characterButtons.forEach( characterButton => {
  characterButton.addEventListener("click", addCharacterToList);
});




function addCharacterToList(event) {
  // determine first empty slot
  const firstEmptySLot = teamList.querySelector("li:empty");
  
  // clone img
  const characterButton = event.currentTarget;
  const characterImg = characterButton.querySelector("img");
  const characterName = characterImg.alt;
  const characterImgClone = characterImg.cloneNode();
  
  // create delete button   
  const deleteButton = document.createElement("button");
  deleteButton.ariaLabel = `verwijder ${characterName}`;
  // CLICK ON DELETE BUTTON
  deleteButton.addEventListener("click", deleteCharacterFromList );

  //add img to first empty slot
  firstEmptySLot.appendChild(characterImgClone);
  // add button to first empty slot
  firstEmptySLot.appendChild(deleteButton);

  // update counter and progress
  updateTeamCounterAndProgress(1);

  // update interactivity of list
  updateInteractivityOfList();

  // update completeness of team
  updateCompletenessOfTeam();
}



function deleteCharacterFromList(event) {
  // get and then delete button and image
  const deleteButton = event.currentTarget;
  const slot = deleteButton.closest("li");
  const characterImg = slot.querySelector("img");

  deleteButton.remove();
  characterImg.remove();

  // update counter and progress
  updateTeamCounterAndProgress(-1);

  // update interactivity of list
  updateInteractivityOfList();

  // update completeness of team
  updateCompletenessOfTeam();
}



function updateTeamCounterAndProgress(delta) {
  // update counter
  const currentCount = teamCounter.textContent;
  const newCount = currentCount - delta;
  teamCounter.textContent = newCount;
  
  // update prgress
  teamProgress.value = teamProgress.value + delta;
}



function updateInteractivityOfList() {
  const openSLot = teamList.querySelector("li:empty");

  if(openSLot) {
    toggleDisability(false)
  } else {
    toggleDisability(true)
  }
}

function toggleDisability (isDisabled) {
  characterButtons.forEach(characterButton => {
      characterButton.disabled = isDisabled;
  });
}



function updateCompletenessOfTeam() {
  const openSLot = teamList.querySelector("li:empty");

  if (openSLot) {
    teamList.classList.remove("is-complete");
  }
  else {
    teamList.classList.add("is-complete");
  }
}





/****************/
/* SCROLL LISTS */
/****************/

const characterSections = document.querySelectorAll(".character-section");
const lists = document.querySelectorAll(".character-section ul");
const listButtons = document.querySelectorAll(".list-button");



// CHECK VISIBILITY & INTERACTIVITY OF LIST BUTTTONS AFTER PAGE LOAD
updateVisibilityOfScrollButtons();

// CHECK VISIBILITY & INTERACTIVITY OF LIST BUTTTONS AFTER RESIZE
// using a resize observer is nicer
window.addEventListener("resize", updateVisibilityOfScrollButtons);

// CHECK INTERACTIVITY OF LIST BUTTONS AFTER SCROLLING
// using scroll throttling is nicer
lists.forEach(list => {
  const characterSection = list.closest(".character-section");
  list.addEventListener("scroll", (event) => {
    updateInteractivityOfScrollButtons(characterSection);
  });
});

// CLICK ON LIST BUTTONS
listButtons.forEach(listButton => {
  listButton.addEventListener("click", scrollList);
});



function scrollList(event) {
  const listButton = event.currentTarget;
  // get direction
  const direction = listButton.dataset.direction;

  // find section, list and list dimensions
  const characterSection = listButton.closest(".character-section");
  const list = characterSection.querySelector("ul");
  const listWidth = list.clientWidth;

  // if to left is clicked
  if (direction == "left") {
    list.scrollLeft = list.scrollLeft - listWidth * .8;
  }
  // if to right is clicked
  else {
    list.scrollLeft = list.scrollLeft + listWidth * .8;
  }

  // the interactivity is checked because the scroll event is triggered
}



function updateInteractivityOfScrollButtons(characterSection) {
  // find list buttons
  const toLeftButton = characterSection.querySelector("[data-direction='left']");
  const toRightButton = characterSection.querySelector("[data-direction='right']");

  // find list and list dimensions
  const list = characterSection.querySelector("ul");
  const listWidth = list.clientWidth;
  const listScrollWidth = list.scrollWidth;
  const listScrollLeft = list.scrollLeft;

  // if list is at the start
  if (listScrollLeft == 0) {
    toLeftButton.disabled = true;
  }
  else {
    toLeftButton.disabled = false;
  }

  // if list is at the end
  if (listScrollLeft + listWidth >= listScrollWidth) {
    toRightButton.disabled = true;
  }
  else {
    toRightButton.disabled = false;
  }
}



function updateVisibilityOfScrollButtons() {
  characterSections.forEach(characterSection => {
    // find list buttons
    const toLeftButton = characterSection.querySelector("[data-direction='left']");
    const toRightButton = characterSection.querySelector("[data-direction='right']");

    // find list and list dimensions
    const list = characterSection.querySelector("ul");
    const listWidth = list.clientWidth;
    const listScrollWidth = list.scrollWidth;

    // if list fits on screen
    if(listWidth >= listScrollWidth) {
      // hide buttons
      toLeftButton.hidden = true;
      toRightButton.hidden = true;
    }
    else {
      // show buttons
      toLeftButton.hidden = false;
      toRightButton.hidden = false;

      // check interactivity
      updateInteractivityOfScrollButtons(characterSection);
    }
  });
}