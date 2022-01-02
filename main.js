import {GameStateManager} from '/game/gamestates/GameStateManager.js'
import {controls} from './controls/controls.js'
import {TestState} from '/game/gamestates/TestState.js'

var canvas = document.getElementById("game-container");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;

//Init Manager
var state = new TestState();
var controller = new controls(document);

var manager = new GameStateManager(state, controller);


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
    manager.draw(canvas,ctx);
}

setInterval(() => {draw(manager)}, 16);
