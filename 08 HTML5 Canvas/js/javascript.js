const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const clr = document.querySelector(".clear");
const color = document.getElementById("brushColor");
const brush = document.getElementById("brushSize");
const download = document.querySelector(".download");

brush.defaultValue = 1;

var canvasW = canvas.offsetWidth;
var canvasH = canvas.offsetHeight;

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

canvas.addEventListener("mousedown", e => {
    draw = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

function updateColor()
{
    context.strokeStyle = `${this.value}`;
}

function updateBrushSize()
{
    context.lineWidth = this.value;
}

function Downloadimg()
{
    var img = canvas.toDataURL("image/jpeg");
    this.href = img;
}

clr.addEventListener("click", () => context.clearRect(0, 0, canvas.width, canvas.height));
color.addEventListener("mousemove", updateColor);
color.addEventListener("change", updateColor);
brush.addEventListener("change", updateBrushSize);
download.addEventListener("click", Downloadimg);