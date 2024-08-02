
let x = 0;
let y = 100;
let velocidad = 1;
let condicionDeReboteIzq;
let condicionDeReboteDer;
let distancia;
let diametro = 50;
let colorDeFondo  = 255;
let dentroDeLaElipse;

function setup() {
  createCanvas(500, 500);

}

/**
 *  En este ejemplo vemos como hacer para que la elipse deje de moverse si estamos sobre ella o si presionamos el mouse
 */

function draw() {
  background(colorDeFondo);

  condicionDeReboteDer = x >= width; 
  condicionDeReboteIzq = x < 0; 
  distancia = dist(x,y , mouseX , mouseY);

  if (condicionDeReboteIzq || condicionDeReboteDer ){
    velocidad = velocidad * -1;
    colorDeFondo = random(0, 255);
  }

  dentroDeLaElipse = distancia <= diametro/2 ; 
  // TRUE : Si el mouse esta dentro de la ellipse
  // FALSE : Si estoy fuera

  if(!dentroDeLaElipse && !mouseIsPressed){
    x += velocidad;
  }

  text( distancia, width/2,height/2);

  ellipse(x, y ,50);


}