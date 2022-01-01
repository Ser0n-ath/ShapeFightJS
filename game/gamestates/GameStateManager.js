export class GameStateManager{

    #states = []

    constructor(gameState){
        this.#states.push(gameState);
    }

    newState(newState){
        this.#states.push(newState)
    }

    //returns the current state and reverts to previous state
    endCurrentState(){

        if(this.#states.length === 1){ //We at the main menu 
            return null;
        }else{
            return this.#states.pop();
        }
    }

    //Draws the state at the top of the stack.
    draw(canvas, ctx){
        var currState = this.#states[this.#states.length-1];
        currState.draw(canvas,ctx);
    }

    //Return the current state of the game.
    getCurrentState(){
        var currState = this.#states[this.#states.length-1];
        return currState;
    }
}