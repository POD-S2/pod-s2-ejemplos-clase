let demolicion 
let paro

function setup() {
createCanvas(500, 250)
}

function draw() {
  background(0, 255, 0);

  demolicion = false
  paro = true
  if ( demolicion || paro ){
    text("NO HAY CLASES",width/2,height/2)
  }

}