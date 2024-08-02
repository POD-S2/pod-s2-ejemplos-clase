let distanciaDesdeEllipseAlMouse;
function setup() {
  createCanvas(500, 500);

}

/**
 *  En este ejemplo vemos como determinar si el mouse esta dentro de una elipse o no
 */


function draw() {
  background(255);
  fill(255,0,0)
  ellipse(250, 250, 100)
  distanciaDesdeEllipseAlMouse = dist(250,250,mouseX, mouseY);
  console.log(distanciaDesdeEllipseAlMouse);

  if (distanciaDesdeEllipseAlMouse< 50){
    fill(0)
    text("Dentro de la e.", 250,250)
  }


}