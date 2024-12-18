let diametro = 180; 
let posicionInicial = 100
let posY = 200
function setup(){
	createCanvas(1000,250)
}

function draw(){
	background(204)
	posicionInicial = 100

	ellipse(posicionInicial,posY,diametro,diametro)

	posicionInicial = posicionInicial + 50 // 100 + 50

	ellipse(posicionInicial ,posY,diametro,diametro)

	posicionInicial = posicionInicial + 50 // 150 + 50

	ellipse(posicionInicial ,posY,diametro,diametro)

	posicionInicial = posicionInicial + 50 // 200 + 50

	ellipse(posicionInicial ,posY,diametro,diametro)

	// posicionInicial -> 250 
	//noLoop()

}

