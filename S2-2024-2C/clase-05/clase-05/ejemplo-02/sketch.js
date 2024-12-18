let x = 50;
let espacio = 10;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);

  for(let x = 50; x <= 140 ; x= x + 10){
	line(x,0,x,height)
  }



}