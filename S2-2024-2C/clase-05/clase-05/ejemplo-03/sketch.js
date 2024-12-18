let x = 50;
let espacio = 10;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  
  background(220);
  x = 50;
  for(let i = 1 ; i <= 10 ; i++){
	line(x,0,x,height)
	x += espacio;
  }
  console.log(x);


}