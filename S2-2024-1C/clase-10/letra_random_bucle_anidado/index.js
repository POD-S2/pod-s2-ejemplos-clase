let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // 26 letras
let letraElegida

function setup() {
  createCanvas(600, 600);
  // propiedades 
  noStroke()
  textSize(80) // Jugar con el tamaño de la letra
  background(255)
  textAlign(LEFT,TOP)

  // eleccion de letra
  let numLetra = random(0,26) // Sorteamos un numero
  letraElegida = alfabeto.charAt(numLetra) // elegimos el string

  for(let x = 0 ; x < width ; x+= 40 ){
    fill(random(200,255),0,random(100,255),random(50,100))
    for(let y = 0 ; y < height ; y+=50 ){
      text(letraElegida,x,y)
    }
  }
 
}


