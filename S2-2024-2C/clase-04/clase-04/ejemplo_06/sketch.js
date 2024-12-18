let diametro = 50
let radio = 25

function setup() {
createCanvas(500, 500)
}

function draw() {
    background(0, 255, 255);

    let distanciaAElipse = dist(250,250,mouseX,mouseY )

    fill(0)
    text(distanciaAElipse, 250,300)
    fill(0,255,0)
    ellipse (250,250, diametro)

    if(distanciaAElipse <= radio){
        fill(0)
        text("ADENTRO", 250,400)
    }



}