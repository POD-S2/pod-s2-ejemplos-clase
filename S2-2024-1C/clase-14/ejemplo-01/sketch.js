 

let x = []
let y = []

function setup() {
  createCanvas(500, 500);
  
  for(let i = 0 ; i < 10 ; i++ ){  
     x.push(random(50,450))
     y[i] = random(50,450)
     console.log(y[i])
  }
  
}


function draw() {
  background(255);
  
  for(let i = 0 ; i < 10 ; i++ ){  
    fill(random(255),random(255),random(255))
    ellipse(x[i],y[i] ,30 )
     
     
  }
  
 noLoop()
 
}