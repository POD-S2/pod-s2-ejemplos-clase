let guitarra
let volumen 
function preload(){
  guitarra = loadSound("sonidos/hb-guitar.mp3")
}

function setup() {
  createCanvas(400, 400);
  background(0)
  /*guitarra.play()
  let volumen = map(mouseX, 0,400,0,1)
  console.log(volumen)
  guitarra.setVolume(0.5) // valores entre 0.0 y 1.0*/
}

function draw(){

	if(!guitarra.isPlaying()){
		guitarra.play()
	}

	volumen = map(mouseX, 0,400,0,1)
	guitarra.setVolume(volumen) // valores entre 0.0 y 1.0

	


}

