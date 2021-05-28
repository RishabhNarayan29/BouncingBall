const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine ;  
var world;
var ball, ground;



function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  var groundOptions={
    isStatic:true
  }

  ground=Bodies.rectangle(200, 380, 400, 20, groundOptions);
  World.add(world,ground);
  
  var ballOptions={
    restitution:10
  }
  
  ball=Bodies.circle(150, 120, 20, ballOptions);
  World.add(world, ball);
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}
