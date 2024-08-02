

function setup(){
    createCanvas(500,500)
}

function draw(){
    background(100)

    push()
    fill(255,0,0)
    noStroke()
    rect(100,100,50)
    pop()

    push()
    fill(255,0,255)
    noStroke()
    ellipse(200,250, 50)
    pop()

    ellipse(200,200, 50)
}