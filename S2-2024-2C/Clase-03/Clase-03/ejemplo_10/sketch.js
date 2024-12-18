let diam = 60

function setup(){
  createCanvas(478,395);
}

function draw(){
  background(200);
  ellipse(width/2,height - 50,50)
  
  //console.log(mouseX)
  fill(mouseX,0,100)
  rect(200,height/2 - 100, mouseY)
  
  
}