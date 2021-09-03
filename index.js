/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)
//Had to use script defer to have your script run after the HTML has loaded

/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
//PLAYERS
console.log("PLAYERS array looks like this:", PLAYERS)
//  <div class="player-container">

const playerContainer = document.querySelector(".player-container");

PLAYERS.forEach(element => {
    const divPlayer = document.createElement("div");
    divPlayer.className = "player";
    divPlayer.dataset.number = `(${element.number})`;
    console.log(divPlayer);

    const h3 = document.createElement("h3");
    h3.innerText = `${element.name} `;
    divPlayer.appendChild(h3);

    const em = document.createElement("em");
    em.textContent = `(${element.nickname})`;
    h3.appendChild(em);
    
    const playerImg = document.createElement("img");
    playerImg.src = `${element.photo}`;
    playerImg.alt = `${element.name}`;
    divPlayer.appendChild(playerImg);

    playerContainer.appendChild(divPlayer);
})

/***** Deliverable 4 *****/
const findWrongPlayer = document.querySelector(`[data-number="(7)"]`);
findWrongPlayer.remove();