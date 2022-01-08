var ball ={
  x:200,
  y:200,
  r:30,
  xspeed:0,
  color:"blue"

}


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill (ball.color)
  ball.xspeed=2
  ball.x=ball.x+ball.xspeed
}