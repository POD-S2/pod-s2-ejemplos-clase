
let x = 0;
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(220);
  
 

  if ( mouseX > 250 ){
    strokeWeight(1);
    fill(0,255,0);
    rect(250,0,250,500);

  }else{
    fill(255,0,0);
    strokeWeight(10);
    rect(0,0,250,500);   
  }

  fill(250)
  ellipse(x, 100, 50);
  x++;

  /*
  Mismo resultado que el ejemplo anterior pero escrito de otra forma
  if ( mouseX <= 250 ){
    rect(0,0,250,500);
  }else{
    rect(250,0,250,500);
  }
  */

}