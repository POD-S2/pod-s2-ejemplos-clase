let letra = 'a'

function setup() {
  createCanvas(windowWidth, windowHeight)
  fill(255, 0, 0, 1)
  stroke(0)
  textSize(400)
}

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 20; i++) {
      //text(letra, mouseX  , mouseY)
      text(letra, mouseX + i , mouseY+i )
      //ellipse( mouseX + i , mouseY+i, 50)
    }
  }
}

function keyPressed() {
  // key es una variable de p5
  // guarda la ultima tecla tipeada
  letra = key
  if (key == 's'){
    saveCanvas()

  }
}


function mousePressed(){
  //saveCanvas()
}
