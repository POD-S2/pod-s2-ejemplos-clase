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

  for (let index = 0; index < frames.length; index++) {
    imagenes[index] = loadImage('static/'+frames[index])
  }
}

function setup () {
  createCanvas(1000, 1000)
  frameRate(10)

  console.log(imagenes[0].width)
 }

function draw() {
  image(imagenes[foto], 0, 0, imagenes[foto].width * 2, imagenes[foto].height * 2)
  foto++

  if (foto >= frames.length) {
    foto = 0
  }
}
