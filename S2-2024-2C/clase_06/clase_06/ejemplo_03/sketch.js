let tiempo;
let rangoDeTiempo = 4000
let grosorBorde = 1
// 1000 milisegundos -> 1 segundo

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{

    //console.log(millis())
    tiempo = millis()%rangoDeTiempo // siempre devuelve algo entre 0 y 3999
    console.log(tiempo)
    background(230)

    grosorBorde++;

   

    if( tiempo < 2000){
        //Primer diseño
        strokeWeight(grosorBorde)
        stroke(0)
        for (let i = 1; i <= 10; i++) {
          line(i * 45, 0, i * 45, 500)
          stroke(20 * i)
        }
    }else{
        grosorBorde = 1
        //segundo diseño
        strokeWeight(1)
        for (let i = 0; i < 500; i += 50) {
          line(i, 0, i + 50, 250)
        }
        strokeWeight(15)
        for (let i = 25; i < 500; i += 50) {
          line(i, 250, i + 50, 500)
        }     
    }
}


// 2 diseños -> c/uno durante 2 seg -> c/uno aparezca 2000 milisegundos
// el rango de tiempo tendra que ser 4000