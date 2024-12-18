let tiempo;
let rangoDeTiempo = 4000

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

    if( tiempo < 2000){
        background(255, 0,100)
    }else{
        background(255, 100,0) 
    }
}


// 2 diseños -> c/uno durante 2 seg -> c/uno aparezca 2000 milisegundos
// el rango de tiempo tendra que ser 4000