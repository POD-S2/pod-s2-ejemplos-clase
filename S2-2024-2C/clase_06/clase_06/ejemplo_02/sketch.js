let tiempo;
let rangoDeTiempo = 8000

// 1000 milisegundos -> 1 segundo

function setup() 
{
	createCanvas(400, 400);
    console.log(round(1.7))
}

function draw()
{

    //console.log(millis())
    tiempo = round(millis())%rangoDeTiempo // siempre devuelve algo entre 0 y 7999
    //console.log(tiempo)

    if( tiempo < 2000){
        background(255, 0,100)
    }else if (tiempo < 4000){
        background(255, 100,0) 
    }else if( tiempo < 6000){
        background(255, 0,0) 
    }else{
        background(0,0,255)
    }

}

//round(1.2) -> 1 
//round(1.7)-> 2

// 4 diseños -> c/uno durante 2 seg -> c/uno aparezca 2000 milisegundos
// el rango de tiempo tendra que ser 2000 * 4 -> 8000