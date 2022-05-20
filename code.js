function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  }
  
function draw() {
    background(mouseX,192,109);
  var move = 300;
   stroke(255,255,255,0)
  fill(255,255,255,500)
  stroke(255,255,255,0)
  fill(255,255,255,500)
  rect(40,150,200,60)
  fill(255,255,255,500)
  ellipse(40,150,60,60)
  ellipse(40,210,60,60)
  ellipse(240,210,60,60)
  ellipse(240,150,60,60)
   stroke(255,255,255,0)
  fill(255,255,255,100)

    stroke(255,255,255,0)
  fill(255,255,255,500)
  rect(mouseX,mouseY,200,60)
  fill(255,255,255,500)
  ellipse(200+mouseX,60+mouseY,60,60)
  ellipse(200+mouseX,mouseY,60,60)
  ellipse(mouseX,mouseY,60,60)
  ellipse(mouseX,60+mouseY,60,60)
}








