/* Declaramos las variables como globales */
let x
let y
let cuerpo
let tiempo;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER);
  textFont('Roboto');
  frameRate(10);
}

function draw() {
  /* generamos un número random
  del 5 al 150 para el cuerpo */
  cuerpo = random(5, 150); 
  fill(255, 55);
  textSize(cuerpo);
  
  tiempo = millis()%3000

  /* generamos un número random para x de 0 hasta la mitad del ancho del canvas */
  x = random(0, width/2);
    /* generamos un número random para y de 0 hasta todo el alto del canvas */
  y = random(0, height);

  if(tiempo < 1500){
    textStyle(ITALIC);
    textAlign(RIGHT);
    text("POD", x, y);
  } else{
    fill(255,100,255,55)
    textAlign(LEFT);
    textStyle(BOLD);
    x = x + width/2
    text("S2", x, y)
  }

  ellipse(random(width), random(height),200)
  

  
  /* Imprimo el valor de x en la consola del navegador F12 para evaluar que esté funcionando  */
  console.log("x: ", x)

}


/* Cuando clickeo sobre el canvas en el navegador...  */
/*function mousePressed() {
  /* ...guardo un PNG del programa en ese momento 
  saveCanvas();
}*/