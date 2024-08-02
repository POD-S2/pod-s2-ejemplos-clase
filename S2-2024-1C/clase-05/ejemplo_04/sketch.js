

function setup() {
  createCanvas(200, 200);

}

function draw() {
  background(220);
  fill(0,255,0);
  if (mouseX>0){
    rect(0,0,250,500);
  }else{
    rect(250,0,250,500);
  }

}