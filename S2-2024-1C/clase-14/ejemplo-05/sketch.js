
function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  
  function draw() {
    background(220)
    fill(0,100)
    rect(10,100,50)
    
    push()
    fill(255,0,0,100)
    scale(2.5)
    rect(10,100,50)
    pop()
    

    push()
    fill(255,0,255,100)
    scale(2.5)
    rect(20,100,50)
    pop()
  
  
  
  }