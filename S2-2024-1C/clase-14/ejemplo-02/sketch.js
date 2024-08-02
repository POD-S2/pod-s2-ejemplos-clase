let nombres = ['Valentina', 'Agustin', 'Ignacio', 'Camila',
'Agustina', 'Martina', 'Tomás', 'Rocio', 'Belen', 'Sofia',
'Santiago', 'Juan Cruz', 'Juan', 'Francisco', 'Joaquín', 'Nicolás', 'Candela', 'M. Belen', 'Rodrigo','Franco']

let cantidades = [3850, 2614, 2457, 2420, 2380, 2330, 2299, 1925, 1891, 1806, 1760, 1693, 1649, 1595, 1578,1547,1535,1518,1472, 1437]


function setup() {
  createCanvas(1200, 300)
  background(255)
  
  let posX = 10
  let miDiametro ;
  let opacidad;
  for(let miIndice = 0 ; miIndice < nombres.length ; miIndice++ ){

    miDiametro = map( cantidades[miIndice] ,1437, 3850, 1 , 80 )
    opacidad =  map( cantidades[miIndice] ,1437, 3850,20, 255 )
    //console.log("Nombre: " + nombres[miIndice] + "- Cantidad: "+ cantidades[miIndice] + " - Cant. map: " + miDiametro)
    
    fill(0)
    text(nombres[miIndice] , posX , 150)
    fill(255,0,100, opacidad)
    ellipse(posX + 20, 180, miDiametro )
    posX+= 60;

  }
  


}

