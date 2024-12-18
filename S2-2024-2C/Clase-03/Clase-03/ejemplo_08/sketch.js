let diam = 1
let posX = 0

function setup(){
  createCanvas(500,500); // 400px x 800px
  //background(200);

}

function draw(){
  background(200);
  diam+= 0.1;
  posX += 0.5;
  //console.log(posX)
  ellipse(posX,height/2,diam)
  
}