let cancion
let amplitud
let nivel 
function preload(){
  cancion = loadSound('assets/music/bbtc-aurora.mp3')
}

function setup() {
  
  createCanvas(400, 400);
  textAlign(CENTER,CENTER)
  textSize(20)
  
  //Seteos sobre la canción
  cancion.setVolume(0.5)
  cancion.play()
  amplitud = new p5.Amplitude();
}

function draw() {
  background(220);
 
  nivel = amplitud.getLevel()
  text("Amplitud:" + round(nivel,2) , 200,100 )
  
  //Imprimimos por pantalla el tiempo actual de la canción
  let currentTime = round(cancion.currentTime(),2)
  text("Tiempo:" + currentTime +' seg' , 200,300 )

  let diametroDeElipse = map(nivel,0,0.5,10,500)
  let colorDeElipseRojo =map(nivel,0,0.5,0,255)
  fill(colorDeElipseRojo,10,0)
  ellipse(width/2,height/2,diametroDeElipse )

}


/*
function keyTyped(){
  if(key === 's'){
    if(!cancion.isPlaying()){
      cancion.play()
    }
  }
}*/
