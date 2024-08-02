

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(220);
  fill(0,255,0);
  if (mouseX >= 250){
    rect(0,0,250,500);
  }else{
    rect(250,0,250,500);
  }

}