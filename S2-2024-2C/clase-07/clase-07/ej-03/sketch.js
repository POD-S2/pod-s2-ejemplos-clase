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
  text( apellidos[i] , posX[i], posY[i])
 }

}
