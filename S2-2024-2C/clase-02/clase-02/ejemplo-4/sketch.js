let gris = 150
let colorRojo = 255

function setup(){
	createCanvas(500,500)

 
}

function draw(){
	background(0)

	fill(gris)
	rect(50,50,300,300)

	gris = gris + 155 
	fill(colorRojo,0,100)
	ellipse(150,150,300,300)
	fill(gris , 150)
	rect(150,150,300,300)
}