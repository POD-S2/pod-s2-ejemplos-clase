function setup() 
{
	createCanvas(500, 500);
    angleMode(DEGREES)
}
let angulo = 45
function draw()
{
    background(120)

    push()
    rotate(mouseY)
    translate(width/2,height/2)
    fill(0,0,255)
    rect(0,0,100,50)
    pop()

}
