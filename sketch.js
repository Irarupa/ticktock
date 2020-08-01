var hrs,min,sec, angleSec,angleMin,angleHr


function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(400,200);
  rotate(-90);
  
  hrs = hour();
  console.log(hrs);
  min = minute();
  sec = second();

  angleSec = map(sec,0,60,0,360);
  angleMin = map(min,0,60,0,360);
  angleHr  = map(hrs%12,0,12,0,360);
 
  
  push();
  //console.log(angleSec)
  rotate(angleSec);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);

  pop();

  push();
  rotate(angleMin);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();


 push();
  rotate(angleHr);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

 point(0,0)
stroke("red");
strokeWeight(10);
noFill();
arc(0,0,300,300,0,angleSec);


stroke("blue");
strokeWeight(10);
noFill();
arc(0,0,260,260,0,angleHr);

stroke("green");
strokeWeight(10);
noFill();
arc(0,0,280,280,0,angleMin);





}