import {GameStateManager} from '/game/gamestates/GameStateManager.js'
import {TestState} from '/game/gamestates/TestState.js'

var canvas = document.getElementById("game-container");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;

//Init Manager
var state = new TestState();
var manager = new GameStateManager(state)
var state2 = new TestState();

//Test
window.addEventListener('load', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    draw(manager);
});


window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    draw(manager);
}, false);


function draw(manager){
    manager.draw(canvas, ctx);
    var curr = manager.getCurrentState().y;
   
    
    if(curr === 200){
        console.log("New State Added");
        manager.newState(state2);
    }

    if(curr === 400){
        console.log("Current State Removed");
        manager.endCurrentState();
    }
}



setInterval(() => {draw(manager)}, 16);
