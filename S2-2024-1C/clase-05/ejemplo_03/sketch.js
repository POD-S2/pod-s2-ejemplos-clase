let vidas = 150;

function setup() {
  createCanvas(200, 200);
  textSize(32);
  textFont('Courier New');
}

function draw() {
  background(220);
  text(vidas, 50, 50);

  if (vidas > 0) {
    text('Play', 50, 100);
  } else {
    text('Game over', 0, 100);
  }

  vidas--;
}