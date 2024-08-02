let tiempo;
let incremento = 0
let incrementoDiametro = 0; 
function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
    tiempo = round(millis()) % 5000
    console.log(tiempo)

    if( tiempo < 2500) {
        incremento+= 10;
        background(255,0,0)
        for(let i = 0 ; i < 10 ; i++){
            line(50 + (i*20),0,50  + (i*20), 10 + incremento )
        }

    }else{
        background(0,255,0)
        if(incrementoDiametro > 400){
            incrementoDiametro = 0;
        }
        ellipse(200, 200,5 + incrementoDiametro )
        incremento= 0;
    }

    incrementoDiametro++;

    

}
