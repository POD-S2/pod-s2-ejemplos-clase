let distanciaAlMouse;
function setup() {
  createCanvas(500, 500);

}
/**
 *  En este ejemplo vemos como calcular la distancia entre un punto y el mouse
 */

function draw() {
  background(255);
  fill(0)
  ellipse(250, 250, 10)
  distanciaAlMouse = dist(250,250,mouseX, mouseY);
  console.log(distanciaAlMouse);

}