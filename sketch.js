var daytime = true;
function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS)
}

function draw() {
  if (daytime == true) {background(211, 234, 238);}
  else {background(29, 67, 73);}
  noStroke();

  /// sun/moon ///////
  if (daytime == true) { 
    strokeWeight(6);
    stroke(242, 223, 145);
    fill(255, 223, 0);   
  }
  else { 
    
    /// Stars ///
    stroke(242, 223, 145);
    strokeWeight(sin(frameCount/10) + 3);
    ellipse(170, 74, 0.5, 0.5);
    ellipse(390, 204, 0.5, 0.5);
    ellipse(35, 55, 0.5, 0.5);
    ellipse(61, 152, 0.5, 0.5);
    ellipse(200, 247, 0.5, 0.5);
    ellipse(350, 250, 0.5, 0.5);
    strokeWeight(sin(frameCount/5) + 3);
    ellipse(5, 202, 0.5, 0.5);
    ellipse(382, 61, 0.5, 0.5);
    ellipse(278, 231, 0.5, 0.5);
    ellipse(297, 125, 0.5, 0.5);
    ellipse(248, 180, 0.5, 0.5);
    
    noStroke();
    
    fill(250, 245, 224);  // moon colour
    
  }
  
  ellipse(300, 80, 50, 50);  // sun
  
  // Moon crater ///
  if (daytime == false) {
    noFill();
    strokeWeight(1);
    stroke(220);
    ellipse(290, 72, 11, 10);
    ellipse(310, 76, 10, 10);
    ellipse(300, 88, 9, 8);    
  }
  noStroke();
  
////// lighthouse //////////////////
  
  // topleft, topright, bottomright, bottomleft
  if (daytime == true) {fill(195, 210, 249);} // bottom layer
  else {fill(8, 39, 117);}
  quad(85, 250, 150, 250, 154, 300, 80, 300);
  
  if (daytime == true) {fill(175, 195, 250);}
  else {fill(4, 34, 116);}
  quad(90, 200, 145, 200, 150, 250, 85, 250);
  ellipse(117.5, 250, 65, 10)
  
  if (daytime == true) {fill(195, 210, 249);}
  else{fill(8, 39, 117);}
  quad(95, 150, 140, 150, 145, 200, 90, 200);
  ellipse(117.5, 200, 55, 10)
  
  if (daytime == true) {fill(175, 195, 250);}
  else {fill(4, 34, 116);}
  quad(100, 100, 135, 100, 140, 150, 95, 150); // top layer
  ellipse(117.5, 150, 45, 10);
  
  triangle(100, 70, 117.5, 50, 135, 70)
  
  fill(250, 245, 224);
  rect(100, 70, 135, 100)
  

///////////// Water ////////////////
  if (daytime == true) { 
    fill(117, 197, 232);
  }
  else { 
    fill(69, 160, 176); 
  }
  beginShape();
  curveVertex(-50, height);
  curveVertex(-50, height);
  curveVertex(0, 290 + sin(frameCount/20)*5);
  curveVertex(100, 290 - sin(frameCount/20)*5);
  curveVertex(200, 290 + sin(frameCount/20)*5);
  curveVertex(270, 290 - sin(frameCount/20)*5);
  curveVertex(320, 290 + sin(frameCount/20)*5);
  curveVertex(400, 290 + sin(frameCount/20)*5);
  curveVertex(500, height);
  curveVertex(500, height);
  endShape();
  
  strokeWeight(1)
  if (daytime == true){
    stroke(242, 223, 145);
    fill(242, 223, 145);
  }
  else {
    stroke(250, 245, 224);
    fill(250, 245, 224);
  }
  
  /// reflection  //////
  for (let i = 0; i < 50; i += 5) {
    line(260 - sin(frameCount/20)*i,
         300 + i- sin(frameCount/i)*5,
         350 + sin(frameCount/20)*i,
         300 + i - sin(frameCount/i)*5);
  }
  
///////// light ///////////
  if (daytime == false){ 
    stroke(242, 223, 145);
    for (let i = 0; i <= 10; i++) { // num lines
      line(117.5, 85, sin(frameCount/100) * width, 50 + i*i);
    }
    textSize(32);
    fill(0, 102, 153);
    text("Click for day!", 160, height/2);
  }
  else {
    textSize(32);
    strokeWeight(3);
    stroke(130, 150, 190);
    fill(195, 210, 249);
    text("Click for night!", 160, height/2);
  }
}

function mousePressed() {
  daytime = !daytime;
}
