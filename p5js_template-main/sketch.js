var ball={x:20,y:30,r:30,xSpeed:0,ySpeed:0,color:["teal", "violet", "lime"]}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[2])
  ball.xSpeed=1
  ball.x=ball.x+ball.xSpeed
  ball.ySpeed=1
  ball.y=ball.y+ball.ySpeed
}