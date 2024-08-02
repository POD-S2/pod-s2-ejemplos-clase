
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
    moneda = random(0,3.1) // 0 hasta 1 inclusive

    if (moneda < 1){
        fill(255,0,0); //se pinta de rojo
        rect(x,y,lado,lado)
        fill(255)
        ellipse(x + 50,y+50,50, 50)

    }else if( moneda < 2){
        fill(0,0,255) // se pinta de azul
        rect(x,y,lado,lado)
    }else{
        fill(0,255,0) // se pinta de verde
        rect(x,y,lado,lado)

    }

    x+= lado;
    if(x>width){
        y += lado;
        x = 0;
    }



 
}
