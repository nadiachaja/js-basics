const characterButtons = document.querySelectorAll(".character-section button");

const teamList = document.querySelector(".team-section ul");

const teamCounter = document.querySelector("#team-counter span");

const teamProgress = document.querySelector("progress");



characterButtons.forEach(characterButton => {
  characterButton.addEventListener("click", addCharacterToTeam);
})




function addCharacterToTeam(event) {
  const characterButton = event.currentTarget;
  const characterImg = characterButton.querySelector("img");
  const characterName = characterImg.alt;
  const characterImgClone = characterImg.cloneNode();

  const emptySlot = teamList.querySelector("li:empty");


  const deleteButton = document.createElement("button");
  deleteButton.ariaLabel = `verwijder ${characterName}`;
  deleteButton.addEventListener("click", deleteCharacterFromTeam);


  emptySlot.appendChild(characterImgClone);
  emptySlot.appendChild(deleteButton);


  updateTeamCounterAndProgress(1);

  updateInteractivityOfLists();

  updateCompletenessOfTeam();
}



function deleteCharacterFromTeam(event) {
  const deleteButton = event.currentTarget;
  const slot = deleteButton.closest("li");
  const characterImg = slot.querySelector("img");

  deleteButton.remove();
  characterImg.remove();

  updateTeamCounterAndProgress(-1);

  updateInteractivityOfLists();

  updateCompletenessOfTeam();
}



function updateTeamCounterAndProgress(delta) {
  teamProgress.value = teamProgress.value + delta;

  const currentCount = teamCounter.textContent;
  const newCount = currentCount - delta ;
  teamCounter.textContent = newCount;
}



function updateInteractivityOfLists() {
  const emptySlot = teamList.querySelector("li:empty");

  // niet compleet
  if (emptySlot) {
    characterButtons.forEach(characterButton => {
      characterButton.disabled = false;
    });
  }
  // compleet
  else {
    characterButtons.forEach(characterButton => {
      characterButton.disabled = true;
    });
  }


}



function updateCompletenessOfTeam() {
  const emptySlot = teamList.querySelector("li:empty");

  // niet compleet
  if (emptySlot) {
    teamList.classList.remove("is-complete");
  }
  // compleet
  else {
    teamList.classList.add("is-complete");
  }
}