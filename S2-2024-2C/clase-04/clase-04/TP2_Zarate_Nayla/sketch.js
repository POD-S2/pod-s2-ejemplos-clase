let lado = 100;
let cantCol = 7;
let posX = 0;
let posY = 0;
let sorteo;

function setup() {
    createCanvas(lado * cantCol, lado * cantCol);
    background(100);
    //frameRate(2)
    // 0, 0.99 -> 0 - 0.5 : primer diseño , 0.50 - 0.99 : segundo diseño
    console.log(sorteo)
}

function draw() {
    sorteo = random(0, 4) //4 diseños

    if (sorteo < 1) { // Si sorteo sale 0 - 1 : primer diseño
        fill(255, 0, 0)
        rect(posX, posY, lado, lado)
        fill(0)
        ellipse(posX + 50,posY+50,50)

    } else if ( sorteo < 2) { // sorteo sale  1 - 1.99 : segundo diseño
        fill(0,255, 0)
        rect(posX, posY, lado, lado)
        fill(0)
        ellipse(posX + 50,posY+50,50)
 
    } else if (sorteo < 3) { // sorteo sale  2 - 2.99 : tercer diseño
        fill(0,0,255)
        rect(posX, posY, lado, lado)
        fill(0)
        ellipse(posX + 50,posY+50,50)

    } else{ // sorteo sale  2 - 3.99 : cuarto diseño
        fill(0)
        rect(posX, posY, lado, lado)
        fill(255,0,0)
        rect ( posX , posY, lado /2)
        fill("#c4ca1d")
        ellipse ( posX + 50 , posY + 50, lado /2)   
    }
    
    posX += lado;

    // ¿posX ya supero el ancho del canvas?
    if (posX > width) {
        posY += lado;
        posX = 0;
    }

}
