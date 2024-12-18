let apellidos = [
  "Alvarez",
  "Amighini",
  "Andrasnik",
  "Angeleri",
  "Bernal Ribotta",
  "Casabal",
  "Cearras",
  "Chervo",
  "Coelho de Jesús",
  "Cueto",
  "Daroca",
  "De Santis",
  "De velazco Ledesma",
  "Demonte",
  "Juarez Muas",
  "Jucht",
  "Llapur Tineo",
  "Mancusi",
  "Mantovani",
  "Marinac",
  "Millapinda Torres",
  "Monti",
  "Palazzo",
  "Park",
  "Parra Krieg",
  "Pausich",
  "Quesada",
  "Sarraguia Osorio",
  "Scavuzzo",
  "Suarez",
  "Vieiro",
  "Zeiguer"
]

let asistencia = [
  1.00,
  0.75,
  1.00,
  0.94,
  0.94,
  0.88,
  0.94,
  0.94,
  1.00,
  0.94,
  0.88,
  0.88,
  0.88,
  0.94,
  0.94,
  0.81,
  1.00,
  1.00,
  0.81,
  0.94,
  1.00,
  0.88,
  1.00,
  0.88,
  0.94,
  0.75,
  0.94,
  0.94,
  1.00,
  0.94,
  0.94,
  0.94
]

// asistencia rango 0 a 1
// me gustaria que vayan desde 0 a 255
// map() -> map(asistencia[1],0,1,0,255) -> 255
// map() -> map(0.1,0,1,0,255) -> 0.5

let posX = []
let posY = []
let contadorPosY = 0 

function setup() {
  createCanvas(500, 500);
  
  for(let i = 0 ; i < apellidos.length ; i++){
    //text( apellidos[i] ,random(width),random(height))
    let posRandom = random(width) // 0 - width -1 -> 0-499
    let posRandomY = contadorPosY // 0 - width -1 -> 0-499

    posX.push(posRandom)
    posY.push(posRandomY)
    contadorPosY+= 10
    //console.log(posX)
  }

}


function draw() {
  background(200);
  
 fill(0)

 for(let i = 0 ; i < apellidos.length ; i++){
  let valorMapeado = map(asistencia[i],0.5,1,0,255)
  console.log(asistencia[i], "->", valorMapeado)
  //fill(valorMapeado,0,0)
  if(valorMapeado<200){
    fill(255,0,0)
  }else{
    fill(0,255,0)
  }
  
  let valorMapeadoParaTexto = map(asistencia[i],0.5,1,10,50)


  textSize(valorMapeadoParaTexto)

  text( apellidos[i] , posX[i], posY[i])
 }

 noLoop()

}


function keyPressed() {
  if (key === 'd') {
    apellidos.pop()
    posX.pop()
    posY.pop()
    // Code to run.
  }
  if (key === 'a') {
    apellidos.push("hola")
    posX.push(random(width))
    posY.push(random(height))

    // Code to run.
  }
}