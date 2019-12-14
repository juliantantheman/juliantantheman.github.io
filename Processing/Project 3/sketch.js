function setup() {
  createCanvas(1600, 720);
}

function draw() {
  if(mouseIsPressed) {
  fill(170,0,50)
  beginShape(TRIANGLE_FAN);
  vertex(mouseY,mouseX)
  vertex(57.5, 50);
  vertex(60, -15);
  vertex(-15, -50);
  vertex(30, -85);
  vertex(-22, 50);
  vertex(57.5, 15);
  
  endShape(TRIANGLE_FAN);
  //fill(200,0,10);}
  //else {
  fill(25,255,0)
  ellipse(mouseX,mouseY,10.15)}
  else{
  fill(5,255,0)
  beginShape(TRIANGLES);
  vertex(mouseX,mouseY)
  vertex(57.5, -50);
  vertex(15, -57.5);
  
  
  endShape(TRIANGLES)
  fill(170,0,50)
  ellipse(mouseY,mouseX,15,10)
  }

  
  }