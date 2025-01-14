const characterButtons = document.querySelectorAll(".character-section ul button");
const teamList = document.querySelector(".team-section ul");
const progress = document.querySelector("progress");
const teamCounter = document.querySelector("#team-counter span");

characterButtons.forEach(characterButton => {
    characterButton.addEventListener("click", addCharacterToTeam);
});

function addCharacterToTeam(event) {

    const characterButton = event.currentTarget;

    const characterImg = characterButton.querySelector("img");
    const characterName = characterImg.alt;
    const characterImgClone = characterImg.cloneNode();

    const deleteButton = document.createElement("button");
    deleteButton.ariaLabel = `verwijder ${characterName}`;
    deleteButton.addEventListener("click", removeCharaterFromTeam);


    const firstEmptySlot = teamList.querySelector("li:empty");


    firstEmptySlot.appendChild(characterImgClone);
    firstEmptySlot.appendChild(deleteButton);

    updateCounterAndProgress(1);

    checkInteractivityOfCharacterList();

    checkCompletenessOfteam();
}

function removeCharaterFromTeam(event) {
    const deleteButton = event.currentTarget;
    const slot = deleteButton.closest("li");
    const characterImg = slot.querySelector("img");

    deleteButton.remove();
    characterImg.remove();

    updateCounterAndProgress(-1);

    checkInteractivityOfCharacterList();

    checkCompletenessOfteam();
}

function updateCounterAndProgress(delta) {
    progress.value = progress.value + delta;

    const currentCount = teamCounter.textContent;
    const newCount = currentCount - delta;
    teamCounter.textContent = newCount;
}



function checkInteractivityOfCharacterList() {
    const emptySlot = teamList.querySelector("li:empty");

    // niet compleet 
    if (emptySlot) {
        characterButtons.forEach(characterButton => {
            characterButton.disabled = false;
        });
    }

    // wel compleet
    else {
        characterButtons.forEach(characterButton => {
            characterButton.disabled = true;
        });
    }
}


function checkCompletenessOfteam(){
    const emptySlot = teamList.querySelector("li:empty");

    if (emptySlot){
        teamList.classList.remove("is-complete");
    }

    else{
        teamList.classList.add("is-complete");
    }
}