
        <button id="start">Start</button>
        <button id="reset">Reset</button>
        <button id="layout">Generate Layout</button>
        <button id="layout">Generate New Layout</button>

    </div>

    <div id="boards">
        <div id="cpuBoard"></div>
        <div id="highlightMessage"> </div>
        <div id="highlightMessageCPU">here!</div>
        <div id="highlightMessageCPU"> </div>
        <div id="playerBoard"></div>
    </div> 

import Player from "./game_logic/player.js";

//player objects that will be passed around
const player = new Player(1); 
const cpu = new Player(2);
let player = new Player(1); 
let cpu = new Player(2);

//buttons
const start = document.getElementById('start')
@@ -24,9 +24,27 @@ start.addEventListener('click', () => {
});
reset.addEventListener('click', () => {
    if (!(reset.classList.contains("inactive")))
    commandButtons("reset");
    layout.classList = 'actice';

    layout.classList = 'active';
    start.classList = 'active';
    reset.classList = "inactive";

    //reset game state from here :

    //create new player objects
    player = new Player(1);
    cpu = new Player(2);

    //reset display
    let cpuBoard = document.getElementById("cpuBoard");
    cpuBoard.innerHTML = ''; //clear board until 'start' is pushed

    //generate new player board
    commandButtons('layout', player, cpu);




});
layout.addEventListener('click', () => {
