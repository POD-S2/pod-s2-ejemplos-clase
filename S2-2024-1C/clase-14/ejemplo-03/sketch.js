
diametros = [142984, 108728, 51118,  49532,  12756,  12104,  6794 , 4880 ] // En KM 
planetas= ["Júpiter","Saturno","Urano" , "Neptuno","Tierra", "Venus", "Marte", "Mercurio"]

function setup(){
    createCanvas(800, 500)
    noStroke()
}

let diametroPlaneta ;
let posX = 10
function draw(){
    background(200)
    

    for(let i = 0 ; i < diametros.length ; i++){
        posX = random(width-100)
        diametroPlaneta = map( diametros[i] ,  4880, 142984 , 0.5, 2.0)
        push()
        scale(diametroPlaneta)
        fill(random(50,100),random(50,10),0,100)
        ellipse(posX, 120, 50)

        pop()
    }
    noLoop()
}