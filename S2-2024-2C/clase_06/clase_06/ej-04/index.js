// 040_repeticion_lineas_diagonales
function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(230)

  strokeWeight(1)
  for (let i = 0; i < 500; i += 50) {
    line(i, 0, i + 50, 250)
  }
  strokeWeight(15)
  for (let i = 25; i < 500; i += 50) {
    line(i, 250, i + 50, 500)
  }
}

function mousePressed(){
  saveCanvas()
}

