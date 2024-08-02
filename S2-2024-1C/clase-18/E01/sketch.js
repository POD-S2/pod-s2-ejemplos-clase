let cancion
let comenzar = false

function preload(){
  cancion = loadSound('assets/music/bbtc-aurora.mp3')
}

function setup() {
  
  createCanvas(400, 400);
  textAlign(CENTER,CENTER)
  textSize(20)
  
  //Seteos sobre la canción
  cancion.setVolume(0.5)
  amplitud = new p5.Amplitude();

}

function draw() {
  background(220);

  //Imprimo las instrucciones
  if(!comenzar){

    text("Instrucciones",200,200)
    text("Presione 'u' para empezar",200,220)

  }else{
      //Imprimimos por pantalla el tiempo actual de la canción
    // y si no esta sonando, damos play.
    if(!cancion.isPlaying()){
      cancion.play()
    }
      let nivel = amplitud.getLevel()
      let diametro = map(nivel,0,0.5,20,200)
 
      fill(255,0,120)
      ellipse(200,200,diametro)
    let currentTime = round(cancion.currentTime(),2)
    text("Tiempo:" + currentTime +' seg' , 200,300 )
    
  }


}


function keyTyped(){
  
  if(key === 'u'){
    comenzar=true
  }
  
}
