
let x = 0;
let velocidad = 1;

function setup() {
  createCanvas(500, 500);

}

function draw() {

  background(220);

  if( x >= width ) {
    velocidad = -1;
  }

  x += velocidad;

  ellipse(x, 100,50);





}