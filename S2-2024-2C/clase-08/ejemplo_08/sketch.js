let miImagen;

function preload(){
    miImagen = loadImage('data/carpincho.jpg')
}

function setup() 
{
	createCanvas(miImagen.width , miImagen.height);
    
}

function draw()
{
    //background(120)
    image(miImagen, 0, 0)
    filter(INVERT)
   

}
