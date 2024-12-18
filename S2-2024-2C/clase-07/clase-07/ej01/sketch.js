
let alumnos;
let miSegundaLista = [];
/*
let alumno1 = "Alvarez, Corina"
let alumno2 = "Amighini, Mora Antonella"
let alumno3 = "Andrasnik, Simona"
*/



function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	
	alumnos = 3;
	alumnos = "muchos"
	alumnos =  ["Alvarez, Corina","Amighini, Mora Antonella" ,"Andrasnik, Simona"]
	console.log(alumnos.length)
	alumnos =  ["Alvarez, Corina","Amighini, Mora Antonella" ]
	console.log(alumnos.length)
	alumnos =  ["Alvarez, Corina"]


	//alumnos = [true, false,true]
	//alumnos = [5,6,100]
	//alumnos = [true,6,"hola mundo"]


	/*text(alumno1 , 200,200)
	text(alumno2 , 200,300)
	text(alumno3 , 200,400)*/

	text(alumnos[0],200,200) // accedo al primer nombre
	text(alumnos[1],200,300)// accedo al segundo nombre
	text(alumnos[2],200,400)

noLoop()
}


