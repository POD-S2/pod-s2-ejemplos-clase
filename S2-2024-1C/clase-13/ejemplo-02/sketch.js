let edadMaria = 23 ;
let edadJazmin = 30 ;
let edadJuan = 18 ;
let edadPablo = 50 ;

let tamanioBarra = 20;
let posicionY = 0;
let desplazamiento = 30;
function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
    background(200)

    posicionY = 0;

    rect(0 , posicionY , edadMaria, tamanioBarra)

    posicionY += desplazamiento;
    
    rect(0 , posicionY , edadJazmin, tamanioBarra)
        
    posicionY += desplazamiento;
    
    rect(0 , posicionY , edadJuan, tamanioBarra)

    posicionY += desplazamiento;
    
    rect(0 , posicionY , edadPablo, tamanioBarra)
}

