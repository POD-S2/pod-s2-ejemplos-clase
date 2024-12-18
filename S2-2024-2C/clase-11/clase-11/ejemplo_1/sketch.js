let imagenParlante;
let colorDelParlante = [255,0,0]
let sonidoEfecto;

function preload(){
	imagenParlante = loadImage("data/parlante.png")
	sonidoEfecto = loadSound("data/sonido.mp3")
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{

	background(200)
	fill(colorDelParlante)
	ellipse(300,300,50)
	image(imagenParlante,280,280,40,40)


	let distancia = dist(300,300,mouseX,mouseY)
	if(distancia < 50/2 && mouseIsPressed){
		if(sonidoEfecto.isPlaying()){
			console.log("pausa")
			sonidoEfecto.stop()	
		}else{
			console.log("play")
			sonidoEfecto.play()	
		}
		colorDelParlante = [255]
	}
}
/*
function mouseClicked(){
	if(distancia < 50/2){
		if(sonidoEfecto.isPlaying()){
			console.log("pausa")
			sonidoEfecto.stop()	
		}else{
			console.log("play")
			sonidoEfecto.play()	
		}
		colorDelParlante = [255]
	}
}
*/