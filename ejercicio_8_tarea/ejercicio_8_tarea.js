/*
 * @name Mixture
 * @frame 710,400 (optional)
 * @description Display a box with three different kinds of lights.
 */
 //Cambios por Silvia Suárez Páez.
function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
}

function draw() {
  background(0);

  // Orange point light on the right
  pointLight(150, 100, 0, 500, 0, 200);

  // Blue directional light from the left
  directionalLight(0, 102, 255, -1, 0, 0);

  // Yellow spotlight from the front. Cambio en tamaño de la luz
  pointLight(255, 255, 109, 0, 0, 100);

  //Luz morada desde abajo
  pointLight(220, 50, 150, -710, -710, -710);


  rotateY(map(mouseX, 0, width, 0, PI));
  rotateX(map(mouseY, 0, height, 0, PI));
  //Cambio de caja a esfera
  sphere(100);
  
//Creo una esfera nueva en una posición distinta al centro. Tiene “velocidad” de rotación distinta.
  rotateY(map(mouseX, 10, width, 10, PI));
  rotateX(map(mouseY, 10, height, 10, PI));
  translate(-150,-100)
  sphere (20,20);
}