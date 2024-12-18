let diametro = 1;
let crecimiento = 1;
function setup(){
  createCanvas(500,500); 

}

function draw(){
  background(200);
  
  
  if(diametro>200){
    crecimiento = -1;
  }
  
  if(diametro < 0){
    crecimiento = 1;
  }
  
  diametro+= crecimiento;
  
  ellipse(width/2,height/2,diametro)
  
}