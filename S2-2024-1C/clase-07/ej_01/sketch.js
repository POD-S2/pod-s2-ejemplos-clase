
function setup() {
	createCanvas(800, 500);

}
  
function draw() {
	noStroke();
	background(100);



	let mitad = width / 4 ; // 200
	
	if (mouseX < mitad){
		fill(0);
		rect(0,0, mitad , height);
	}else if( mouseX < mitad * 2){
		fill(50);
		rect(mitad,0, mitad , height);
	} else if (mouseX< mitad* 3){
		fill(150);
		rect(mitad * 2 ,0, mitad , height);
	}else{
		fill(255);
		rect(mitad * 3 ,0, mitad , height);
	}

	fill(255);
	textSize(24);
	text(mouseX,mouseX,mouseY);


  }