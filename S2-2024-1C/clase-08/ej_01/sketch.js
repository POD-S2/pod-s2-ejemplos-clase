
let lado = 100
let x = 0;
let y = 0;
function setup() 
{
	createCanvas(500, 500);
    background(0);
}

function draw()
{
    
    fill(255)
    rect(x,y,lado,lado)
    x+= lado;

    if(x>width){
        y += lado;
        x = 0;
    }

 
}
