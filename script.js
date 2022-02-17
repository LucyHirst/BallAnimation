"use strict"

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 15;
//ball 1
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 4;
let dy = -4;
//ball 2
let x2 = canvas.width/3;
let y2 = canvas.height-30;
let dy2 = -4;
let dx2 = 4;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
}

function drawBall2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBall2();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.width-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if(x2 + dx2 > canvas.width-ballRadius || x2 + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }

    x += dx;
    y += dy;
    x2 += dx2;
    y2 += dy2;

}

setInterval(draw, 1);