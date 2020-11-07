const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

var canvasW = canvas.offsetWidth;
var canvasH = canvas.offsetHeight;

console.log(canvasH, canvasW);
canvas.style.width = canvasW + "px";
canvas.style.height = canvasH + "px";

var scale = window.devicePixelRatio;
canvas.width = Math.floor(canvasW * scale);
canvas.height = Math.floor(canvasH * scale);

context.scale(scale, scale);

context.strokeStyle = "red";
context.lineJoin = "round";
context.lineCap = "round";

let draw = false;
let lastX = 0;
let lastY = 0;

function drawing(e)
{
    if (!draw)
        return;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => draw = false);
canvas.addEventListener("mouseout", () => draw = false );

canvas.addEventListener("mousedown", e => {
    draw = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});