function setup() 
{
	createCanvas(500, 500);
    angleMode(DEGREES)
}

function draw()
{
    background(120)

    push()
    rotate(45)
    fill(0,0,255)
    rect(10,10,100,50)
    pop()

}
