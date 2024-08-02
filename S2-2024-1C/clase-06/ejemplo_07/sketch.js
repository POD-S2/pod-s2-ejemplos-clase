// Learning Processing
// Daniel Shiffman

function setup() {
  createCanvas(500, 500)
}
/**
 *  En este ejemplo vemos condicionales multiples para pintar el canvas!
 */

function draw() {
  noStroke()
  background(255)

  // Dibujamos un rectángulo diferente en función
  // de la ubicación del mouse.
  if (mouseX < 250 && mouseY < 250) {
    fill(0, 255, 0) //VERDE
    rect(0, 0, 250, 250)
  } else if (mouseX > 250 && mouseY < 250) {
    fill(255, 0, 0)
    rect(250, 0, 250, 250)
  } else if (mouseX < 250 && mouseY > 250) {
    fill(255, 255, 0)
    rect(0, 250, 250, 250)
  } else {
    fill(0, 0, 255)
    rect(250, 250, 250, 250)
  }

  // ejes
  stroke(0)
  line(250, 0, 250, 500)
  line(0, 250, 500, 250)
}