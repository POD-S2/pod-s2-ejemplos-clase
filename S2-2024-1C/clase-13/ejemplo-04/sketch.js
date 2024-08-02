

let anios = [23,30,18,50,70,25,23,60,54,87,81]

let tamanioBarra = 20;
let posicionY = 0;
let desplazamiento = 25;
function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
    background(200)

    posicionY = 0;

    for(let i = 0; i <= anios.length -1  ; i++){
        rect(0 , posicionY , anios[i], tamanioBarra)
        text(anios[i],anios[i] +10 , posicionY + 15)
        posicionY += desplazamiento;
    }

    
}
