
let colorcito;

function setup(){
  createCanvas(500,500); // 400px x 800px
  //background(200);
    background(200);

  colorcito = random(1,255)

}

function draw(){
  fill(random(255), random(255),random(255),random(255))
  rect(random(500),random(500),50)
  //console.log(random(1,10)) // -> 1 a 9..
}