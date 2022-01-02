export class TestState{

    #controlResults;

    constructor(){
        this.x = 50;
        this.y = 50;
    }


    KeyEventManager(controlResults){
        var rightPressed, leftPressed, downPressed, upPressed;
        [rightPressed, leftPressed, upPressed, downPressed] = controlResults; //deconstructing

        if(rightPressed) {
            this.x += 5;
        }
        else if(leftPressed) {
            this.x -= 5;
        }
        if(downPressed) {
            this.y += 5;
        }
        else if(upPressed) {
            this.y -= 5;
        }
    }

    draw(canvas, ctx, controlResults){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(this.x, this.y, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
        this.KeyEventManager(this.#controlResults);
    }

    ISCreadStatus(ReadISC_Controller){
        this.#controlResults = ReadISC_Controller;
    }
}