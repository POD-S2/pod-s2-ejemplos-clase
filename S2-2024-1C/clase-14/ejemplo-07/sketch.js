
function setup() {
  createCanvas(500, 500);
  noStroke()

}

let angulo = 0

function draw() {
  background(200);
  rectMode(CENTER)
  rect(250,250,100)

  push()
  angleMode(DEGREES)
  rectMode(CENTER)
  translate(width/2, height/2)
  rotate(angulo) 
  fill(255,0,0)
  rect(0,0,50)
  pop()


  angulo++;
 

}
