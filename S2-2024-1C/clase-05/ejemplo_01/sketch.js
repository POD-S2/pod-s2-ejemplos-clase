let posicionX = 0;
let posicionY = 100;

function setup() 
{
	createCanvas(500, 500);
}

function draw()
{
    background(200)
    ellipse(posicionX,posicionY,50);
    posicionX++; //posicionX = posicionX + 1;
}
