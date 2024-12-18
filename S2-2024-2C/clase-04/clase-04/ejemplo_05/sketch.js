let x = 0
let velocidad = 1
let diametro = 40
let radio = 20
let posY = 125
function setup() {
createCanvas(500, 250)
}

function draw() {
    background(0, 255, 255);

    let distanciaAElipse = dist(x,posY,mouseX,mouseY )

    if(distanciaAElipse <= radio){
        // La pelota se detiene
        background(100)
    } else{
        //La pelota avanza
        x = x + velocidad; //aumentamos la velocidad
    }

    let reboteDerecha = x > width; // depende de la posicion de la pelota
    let reboteIzquierda = x < 0 ; // depende de la posicion de la pelota

    if ( reboteDerecha || reboteIzquierda){
        velocidad = -1 * velocidad; 
    }
  
    ellipse(x, 125, diametro);
}