// Exercises: Arrays
// Animated walk cycle
let frames = [
  "frame_00.png",
  "frame_01.png",
  "frame_02.png",
  "frame_03.png",
  "frame_04.png",
  "frame_05.png",
  "frame_06.png",
  "frame_07.png",
  "frame_08.png",
  "frame_09.png",
  "frame_10.png",
  "frame_11.png",
  "frame_12.png",
  "frame_13.png",
  "frame_14.png"
]

let imagenes = []
let foto = 0

function preload() {

  /*let imagenACargar = loadImage('static/frame_00.png')
  imagenes.push(imagenACargar)
  imagenACargar = loadImage('static/frame_02.png')
  imagenes.push(imagenACargar)
  imagenACargar = loadImage('static/frame_03.png')
  imagenes.push(imagenACargar) Si no trabajamos con ciclo for */

  for (let index = 0; index < frames.length; index++) {

    let imagenACargar = loadImage('static/' + frames[index])
    //let imagenACargar = loadImage('static/frame_0' + index)
    imagenes.push(imagenACargar)
    //imagenes[index] = loadImage('static/'+frames[index])
  }
}

function setup () {
  createCanvas(1000, 1000)

  console.log(imagenes[0].width)
 }

function draw() {
  image(imagenes[foto], 0, 0,500,500)
  //foto++


}

function keyPressed(){
  if(keyCode === UP_ARROW){
    console.log("Se presiono la tecla")
    foto++;
  }
  if(keyCode === DOWN_ARROW){
    console.log("Se presiono la tecla")
    foto--;
  }

  if (foto >= frames.length) {
    foto = 0
  }
  if (foto <= 0) {
    foto = frames.length-1
  }

}