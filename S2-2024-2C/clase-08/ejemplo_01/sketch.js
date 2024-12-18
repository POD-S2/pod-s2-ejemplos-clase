function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
    background(120)

    push()

    fill(0,0,255)
    rect(100,100,20,50)
    ellipse(200,200,100)
    pop()
    //fill(255)
    ellipse(200,250,100)

    rect(100,150,20,50)
}
