
let pedro
let grados = 0
let escala = 0.5
let ancho = 200
function preload() {
	pedro= loadImage("data/carpincho.jpg")
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}


function draw() {
  background(0);
  
  //trasladamos el origen del canvas al centro
  // y rotamos la imagen

  imageMode(CENTER)
  
  push()
  translate(width / 2, height / 2);
  rotate(grados)
  scale(escala)
  image(pedro, 0,0, ancho,ancho)
  pop()

  grados++
  
  //Ref: https://p5js.org/es/reference/#/p5/rotate

}

function mouseClicked(){
    escala += 0.1
}

function keyPressed(){
  if(key === 'a'){
    ancho += 100
  }else if(key === 'd'){
    ancho -= 100
  }
}


