let lado = 100
let x = 250
let y = 250
function setup() {
createCanvas(500, 500)
}

function draw() {
    background(0, 255, 255);

    let dentroDeX =  mouseX < x + lado && mouseX > x
    let dentroDeY = mouseY < y + lado && mouseY > y

    if( dentroDeX && dentroDeY){
        fill(255,0,0)
    }else{
        fill(0)
    }
    rect(x,y,lado)

}