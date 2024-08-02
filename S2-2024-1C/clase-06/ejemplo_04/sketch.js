
function setup() {
  createCanvas(500, 500);

}
/**
 *  En este ejemplo vemos como utilizar mouseIsPressed para pintar el fondo del canvas
 */
function draw() {

  if(mouseIsPressed){
    let colorFondoR = random(255);
    let colorFondoG = random(255);
    let colorFondoB = random(255);

    background(colorFondoR, colorFondoG,colorFondoB);
  }else{
    background(100)
  }

  text(mouseIsPressed,250,250);
}