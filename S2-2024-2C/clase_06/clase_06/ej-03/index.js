// 040_repeticion_lineas_degrade

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(230)
  strokeWeight(15)
  stroke(0)
  for (let i = 1; i <= 10; i++) {
    line(i * 45, 0, i * 45, 500)
    stroke(20 * i)
  }
}

function mousePressed(){
  saveCanvas()
}

