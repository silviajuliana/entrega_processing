//Purple Rain en Java. Coding challenge.
//Variaciones por Silvia Suárez.
//Purple (138, 43, 226)
//Background (230, 230, 250)

//creamos 100 gotas.
Drop [] drops = new Drop[700];

void setup (){
size (640, 360);
for (int i = 0; i < drops.length; i++){
drops[i]  = new Drop();
}
}

void draw(){
  background(230, 230, 250);
 for (int i = 0; i < drops.length; i++){
drops[i].show();
drops[i].fall();
}
  
  }