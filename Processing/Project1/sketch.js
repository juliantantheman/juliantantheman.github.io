function setup() {
  createCanvas(720, 720);
  }
  function draw() {
  if (mouseIsPressed) {
  fill(0,150,75);
  } else {
  fill(200,0,60);
  }
  ellipse(mouseX, mouseY, 40, 20);
  }
  