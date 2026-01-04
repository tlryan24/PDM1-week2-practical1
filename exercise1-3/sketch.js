function setup(){
createCanvas(500,500);
rect(CENTER);

}

function draw(){
    background(255);
    fill(0);
    square(mouseX-50,mouseY-50,100);
    square(mouseX-50,mouseY-50,100);
    square(mouseX,mouseY,100);

}