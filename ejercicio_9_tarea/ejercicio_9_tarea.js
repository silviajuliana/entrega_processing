//Este ejercicio recrea el clásico one-line Commodore 64 BASIC program
//Es un challenge hecho por The coding train en Youtube. Tiene variaciones mías.
//Silvia Suárez Páez

//variables
let x = 0;
let y = 0;
let spacing = 25;

function setup() {
 createCanvas(600, 600);
  background(0);


  }

function draw() {
  stroke(255);
  //esta es la probabilidad en la que se creará el pattern. La línea dibujada se pinta cada 0.5 hacia un lado o el otro.
  if (random(1) < 0.5) {
    line (x, y, x + spacing, y + spacing);
 } else   {
   line (x, y + spacing, x + spacing, y);
}
x = x + spacing;
if (x > width){
  x = 0;
  y = y + spacing;
  
  }
  //Con esta variable logré aparecer una franja cuando el pattern llega al final.
if (y > height){
 noStroke();
  fill(100,150,200);
    rect(x, 60, x, 80)
s = "¡HOLA! Este es un código para Burbano";
fill(255);
textAlign(CENTER);
text(s, 300, 100); 
  }
  
  }