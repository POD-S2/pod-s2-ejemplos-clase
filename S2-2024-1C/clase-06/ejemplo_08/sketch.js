
let x = 0;
let velocidad = 1;
let condicionDeReboteIzq;
let condicionDeReboteDer;
let colorDeFondo  = 255;
function setup() {
  createCanvas(500, 500);

}

/**
 *  En este ejemplo vemos como utilizar operadores logicos para hacer el rebote de la pelota 
 */

function draw() {
  background(colorDeFondo);

  condicionDeReboteDer = x >= width; // ¿ -1 >= 500 ? NO -> FALSE
  condicionDeReboteIzq = x < 0; //¿ -1<0? -> TRUE

  //condicionDeReboteIzq && condicionDeReboteDer => FALSO SIEMPRE
  

  if (condicionDeReboteIzq || condicionDeReboteDer ){
    velocidad = velocidad * -1;
    colorDeFondo = random(0, 255);
    
    //1 -> 1 * -1 = -1
    //-1 -> -1 * -1 = +1
  }

  /*
  if(  condicionDeReboteDer ) {
    velocidad = -1;
  }

  if(  condicionDeReboteIzq ) {
    velocidad = 1;
  }
  */


  x += velocidad;
  text(x , width/2,height/2);
  ellipse(x, 100,50);


}