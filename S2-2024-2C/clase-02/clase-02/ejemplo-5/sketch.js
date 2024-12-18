let gris = 150
let colorRojo = 255
let colorVerde = 0
let colorAzul = 200

function setup(){
	createCanvas(500,500)
}

function draw(){
	background(0)
	fill(gris)
	rect(50,50,300,300)
	//gris = gris + 150
	gris += 150
	gris ++; // gris = gris + 1
	gris --; // gris = gris - 1

	fill(colorRojo,colorVerde,colorAzul)
	ellipse(150,150,300,300)
	fill(gris + 155 , 150) // Cuadrado con transparencia
	rect(150,150,300,300)

}