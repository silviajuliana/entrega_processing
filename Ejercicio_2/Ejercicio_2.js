//Este ejercicio es una variación del tutorial de introducción a Processing de Shiffman.
//Silvia Suárez Páez.

function setup() { 
  createCanvas(500, 400);
  
} 

function draw() { 


 //En esta primera parte pinto la carita. Hay cambios de color según la posición del mouse  
  background(130,mouseX,235,mouseY,243);
  stroke (255);
  fill (255,mouseX,180,200);
  ellipse(250, 200, 300, 300);
  stroke (255);
  fill (255);
  rect(205, 300, 100, 10);
rect(245, 60, 10, 200);
ellipse(180, 150, 70, 70);
  ellipse(320, 150, 70, 70);
  


//Aquí hay un condicional. Si hago clic la imagen  cambia. Hay cambio de color según la posición del mouse.  
  
  if (mouseIsPressed) 
    background(0);
  stroke (255);
 fill (255,mouseY,180,200);
  ellipse(250, 200, 300, 300);
  stroke (255);
  fill (255);
  rect(205, 300, 100, 10);
 rect(245, 60, 10, 200);
ellipse(180, 150, 70, 70);
  ellipse(320, 150, 70, 70);
  }
  