function setup() 
{
	createCanvas(1800, 900);
}

function draw()
{
    background(120)

    push()
    fill(0,0,255)
    scale(2 , 2) 
    ellipse(200,200,100)
    pop()

    //fill(255)
    ellipse(200,250,100)

    scale(1 , 2) 
    fill(255)
    ellipse(200,250,100)


}
