
let lado = 100
let x = 0;
let y = 0;
let moneda;

function setup() 
{
	createCanvas(500, 500);
    background(0);
}

function draw()
{
    moneda = random(0,1.1) // 0 hasta 1 inclusive
    fill(255)
    if (moneda < 0.5){
        fill(255,0,0); //se pinta de rojo
    }else{
        fill(0,0,255) // se pinta de azul

    }

    rect(x,y,lado,lado)
    x+= lado;

    if(x>width){
        y += lado;
        x = 0;
    }



 
}
