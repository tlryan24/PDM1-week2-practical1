function setup(){
    createCanvas(600,600);
    rectMode(CORNERS);
}

function draw(){
    background(0);
    rect(0,0,mouseX,mouseY);
}