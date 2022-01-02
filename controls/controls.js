export class controls{
    //ToDo: Define a hash map  (key->[val1, val2, .., valn])
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;

    keyDownHandler(event) {
        if(event.keyCode == 39) {
            this.rightPressed = true;
        }
        else if(event.keyCode == 37) {
            this.leftPressed = true;
        }
        if(event.keyCode == 40) {
            this.downPressed = true;
        }
        else if(event.keyCode == 38) {
            this.upPressed = true;
        }
    }

    //When button pressed up
    keyUpHandler(event) {
        if(event.keyCode == 39) {
            this.rightPressed = false;
        }
        else if(event.keyCode == 37) {
            this.leftPressed = false;
        }
        if(event.keyCode == 40) {
            this.downPressed = false;
        }
        else if(event.keyCode == 38) {
            this.upPressed = false;
        }
    }


    constructor(document){
        this.document = document;
        //To do: define fxn for custom controllers.
        this.document.addEventListener("keydown", (e) => {this.keyDownHandler(e)}, false);
        this.document.addEventListener("keyup", (e) => {this.keyUpHandler(e)}, false);
    }

    //Controllers



    //Returns status if called by ISC
    ISCgetStatus(){
        return [this.rightPressed, this.leftPressed, this.upPressed, this.downPressed];
    }

    //update control variables given from ISC.
    ISCreadStatus(){
        return null;
    }
}