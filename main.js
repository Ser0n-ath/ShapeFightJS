var canvas = document.getElementById("game-container");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;

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
ctx.clearRect(0,0,canvas.width, canvas.height);
ctx.beginPath();
ctx.rect(x, y, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
    x+= 5;
    y+= 5;
}

setInterval(draw, 16);
