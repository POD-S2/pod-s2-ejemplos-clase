let paisaje
let cursorImg
let col
function preload() {
  // carga de imagenes
  paisaje = loadImage("static/Las-ofrendas-Marcelo-Canevari.jpg") 
  cursorImg = loadImage("static/cursor_with_shadow_15x21.png") 
  
}

function setup(){
  createCanvas(paisaje.width, paisaje.height) 
  noCursor()
  noStroke()
}

function draw(){
  image(paisaje, 0, 0) 
  col = paisaje.get(mouseX, mouseY)

  // circulo
  fill(col) 
  strokeWeight(10)
  stroke(255)
  ellipse(width/2, height/2, width/4)

  descripcionColor()

  // cursor
  image(cursorImg, mouseX, mouseY, 15*10, 21*10) 


}  

function descripcionColor(){
  // texto
  noStroke()
  fill(0)
  textSize(20)
  textAlign(CENTER, CENTER)
  text(col, width/2, height/2)
  textSize(15)
  text("R,G,B,A", width/2, height/2 + 20)

}
