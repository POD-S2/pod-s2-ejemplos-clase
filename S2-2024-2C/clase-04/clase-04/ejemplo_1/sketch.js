let x = 0

let velocidad = 1

function setup() {
createCanvas(500, 250)
}

function draw() {
    background(0, 255, 255);
    x = x + velocidad; //aumentamos la velocidad

    if (x > width) { // condicion para el rebote en pared derecha
      velocidad = -1;
    }
    if (x < 0) { // condicion para el rebote en pared derecha
        velocidad = 1;
    }
  
    ellipse(x, 125, 40);
}