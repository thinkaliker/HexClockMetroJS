/* @pjs font="tradegothic.ttf"; */

PFont font;
var windowWidth = 1280;
var windowHeight = 720;


void setup () {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  size(windowWidth, windowHeight); //put this back for desktop mode
  smooth();
  font = loadFont("tradegothic.ttf");
  textFont(font, windowWidth/5);
}

void draw() {
  int r = hour();
  int g = minute();
  int b = second();
  
  int rh = unhex(str(r));
  int gh = unhex(str(g));
  int bh = unhex(str(b));
  
  background(rh, gh, bh);
  
  //String rs = hex(r).substring(6);
  //String gs = hex(g).substring(6);
  //String bs = hex(b).substring(6);
 
  textAlign(CENTER, CENTER);
  //text("x" + rs + gs + bs, windowWidth/2, windowHeight/2 );
  
  String rz = (r < 10) ? "0" : "";
  String gz = (g < 10) ? "0" : "";
  String bz = (b < 10) ? "0" : "";
  
  text("x" + rz + r + gz + g + bz + b, windowWidth/2, windowHeight/2 );
}
