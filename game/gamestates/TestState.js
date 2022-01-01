export class TestState{
    constructor(){
        this.x = 50;
        this.y = 50;
    }

    draw(canvas, ctx){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(this.x, this.y, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();

        this.x+= 1
        this.y+= 1;
    }
}