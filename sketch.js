var h,m,s;
var hangle,mangle,sangle;
function setup() {
  createCanvas(400,400);
  angleMode()
}

function draw() {
  background("black");  
  translate (200,200)
  rotate (-90)
  h=hour ()
  m=minute()
  s=second()
  hangle=map (h%12,0,12,0,360)
  mangle=map (m,0,60,0,360)
  sangle=map (s,0,60,0,360)
  push ()
  rotate (sangle)
  stroke ([4,247,0])
  strokeWeight (7)
  line (0,0,100,0)
  pop ()
  push ()
  rotate (mangle)
  stroke ([215,247,0])
  strokeWeight (7)
  line (0,0,80,0)
  pop ()
  push ()
  rotate (hangle)
  stroke (["#02F4F2"])
  strokeWeight (7)
  line (0,0,60,0)
  pop ()
 
  noFill ()
  stroke ([4,247,0])
  strokeWeight (6)
  arc(0,0,300,300,0,sangle)
  
  
  noFill ()
  stroke ([215,247,0])
  arc(0,0,285,285,0,mangle)
  noFill ()
  stroke (["#02F4F2"])
  arc(0,0,270,270,0,hangle)
  
  
  fill("white")
  ellipse(0,0,10)


}