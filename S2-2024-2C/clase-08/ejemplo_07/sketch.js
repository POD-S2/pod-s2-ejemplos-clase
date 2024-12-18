let miImagen;

function preload(){
    miImagen = loadImage('data/carpincho.jpg')
}

function setup() 
{
	createCanvas(miImagen.width , miImagen.height);
    image(miImagen, 0, 0)
}

function draw()
{
    //background(120)
    
    fill(0)
    ellipse(mouseX, mouseY, 10)

}
