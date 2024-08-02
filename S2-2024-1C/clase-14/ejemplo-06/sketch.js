

function setup(){
  createCanvas(500,500)
}
function draw() {

  background(200);
  fill(0)
  ellipse(0,0,50)

  push()
  fill(255)
  translate(width/2, height/2)
  ellipse(0,0,50)
  pop()
 

}
