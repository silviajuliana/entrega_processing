//aquí vamos a dibujar la primera gota.

//variables de la gota.
class Drop{
  //hacemos el movimiento de la gota.
  float x = random(width);
  float y = random(-500,-50);
  float z = random(0,20);
  //efecto las gotas “más cerca” son más largas.
  float len = map(z,0,20,10,20);
  //efecto las gotas “más cerca” van más rápido.
  float yspeed = map(z,0,20, 1,20);
  //variable para las gotas con color entre blanco y negro.
  float ycolour = random(0,255);
  
  //función para que la gota caiga.
  void fall() {
  y = y + yspeed;
  //efecto gravedad
  float grav = map(z,0,20,0,0.2);
  yspeed = yspeed + grav;
  
  if (y > height){
    y = random(-200,-100);
    yspeed = map(z,0,20, 4,10);
    background(200,10,200);
    ycolour = 255;
   } 
  }
  
    //función para que la gota se vea en la pantalla.
    void show (){
      float thick = map(z,0,20,1,3);
      strokeWeight (thick);
      stroke (ycolour);
      line (x,y,x,y+len);
      
      }
  }