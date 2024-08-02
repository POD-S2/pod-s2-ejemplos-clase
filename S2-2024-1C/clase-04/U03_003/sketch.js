let x;
let y;

let velocidad=0.5;
let velocidad2=2;

function setup() 
{
    //x = random(400); Usar random siempre dentro de setup() ó draw()
    x = 0;
    y=0;

	createCanvas(400, 400);
}

function draw()
{
    background(200)
    ellipse(x, y, 50);
    x+=velocidad;
    y+=velocidad2;

}
