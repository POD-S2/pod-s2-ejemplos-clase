let imagenParlante;
let colorDelParlante = [255,0,0]
let sonidoEfecto;


let pantalla = 0

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

	if(pantalla == 0){
		text("Presiona 1 para comenzar",200,200)
	}else if (pantalla == 1){
		text("Presiona 0 para ver instrucciones",200,100)
		image(imagenParlante,100,100)
	}else if (pantalla == 2){
		text("Presiona 0 para ver instrucciones",200,100)
		if (!sonidoEfecto.isPlaying()){
			sonidoEfecto.play()
		}
	}

}

function keyTyped(){

	if(key==='1'){
		pantalla = 1
	}
	if(key==='0'){
		pantalla = 0
	}
	if(key==='2'){
		pantalla = 2
	}
}