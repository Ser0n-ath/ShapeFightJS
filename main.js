var canvas = document.getElementById("game-container");
var ctx = canvas.getContext("2d");


//Test
window.addEventListener('load', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    draw();
});


window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    draw();
}, false);

function draw(){
    ctx.beginPath();
    ctx.rect(50, 50, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    
}//Draw code
