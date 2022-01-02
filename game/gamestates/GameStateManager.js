export class GameStateManager{
    #states = [] //Stack of states, ie menu->game mode-> map ->level 
    #controller; //the controller the user is using to interact with the game

    constructor(gameState, controls){
        this.#states.push(gameState);
        this.#controller = controls;
    }

    newState(newState){
        this.#states.push(newState); 
    }

    endCurrentState(){
        if(this.#states.length === 1){ 
            return null;
        }else{
            return this.#states.pop();
        }
    }

    //Shares information between the game state/controllers/display/sound
    interCommunicate(currState){
        var gameController =  this.#controller;
        currState.ISCreadStatus(gameController.ISCgetStatus());
     }

    //Todo: move functions to the display js.
    draw(canvas, ctx){
        var currState = this.#states[this.#states.length-1];
        this.interCommunicate(currState);
        currState.draw(canvas,ctx);

    }

    //Returns the current state (peek fxn in stack datastructure)
    getCurrentState(){
        var currState = this.#states[this.#states.length-1];
        return currState;
    }
}