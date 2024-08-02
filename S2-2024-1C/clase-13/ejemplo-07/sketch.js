 
let posicionMouseX = [];
let posicionMouseY = [];


function setup() {
  createCanvas(500, 500);
  noStroke()
}

function draw(){

  background(255)
  posicionMouseX.push(mouseX)
  posicionMouseY.push(mouseY)

  for(let i = 0 ; i < posicionMouseX.length; i++ ){
    fill(0, 5 * i)
    ellipse(posicionMouseX[i] ,posicionMouseY[i] , 2 * i)
  }

  if(posicionMouseX.length > 50){
    posicionMouseX.shift()
    posicionMouseY.shift()

  }

}


