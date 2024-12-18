let diametro = 1;
function setup(){
  createCanvas(500,500); 

}

function draw(){
  background(200);
  
  
  if(diametro>200){
    diametro = 1;
  }
  
  diametro+=2;
  ellipse(width/2,height/2,diametro)
  
  
  
}