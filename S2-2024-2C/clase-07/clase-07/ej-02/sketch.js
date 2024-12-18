let x0 = 150
let x1 = 361
let x2 = 283
let x3 = 69
let x4 = 471
let x5 = 350
let x6 = 229
let x7 = 131
let x8 = 117
let x9 = 319

let tamRect = [150,361,283,69,471,350,229,131,117,319]
let posRect = 0
function setup() {
  createCanvas(500, 500);

}


function draw() {
  background(200);
  
 fill(0)
 posRect = 0
 
 for (let i = 0 ; i < tamRect.length ; i++){
    rect(0, posRect, tamRect[i], 40)
    posRect +=50
 }
 /*
 rect(0, 0, tamRect[0], 45)
 rect(0, 50, tamRect[1], 45)
 rect(0, 100, tamRect[2], 45)
 rect(0, 150, tamRect[3], 45)
 rect(0, 200, tamRect[4],45)
 rect(0, 250, tamRect[5], 45)
 rect(0, 300, tamRect[6], 45)
 rect(0, 350, tamRect[7], 45)
 rect(0, 400, tamRect[8], 45)
 rect(0, 450, tamRect[9], 45) 
*/
}
