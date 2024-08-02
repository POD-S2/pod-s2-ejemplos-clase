let pigRojo=255;
let c;

function setup() 
{
    //line(0, 0, width, height); Uso incorrecto de width y height
	createCanvas(windowWidth, windowHeight);
    //fill(c);
    //ellipse(mouseX, mouseY,50,50);   
}

function draw()
{
    background(210);
    c = color(255, 0, 0);
    fill(c)
    line(0, 0, width, height);
    line(width, 0, 0, height);
    rect(mouseX,0,width/2,height/2);


}
