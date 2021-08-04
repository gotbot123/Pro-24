
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ground1
var ground2
var ground3

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   

   
  ground =new Ground(200,390,400,20);
  ground1 =new Ground(150,80,60,20);
  ground2 =new Ground(100,80,60,20);
  ground3 =new Ground(50,80,60,20);
  
  
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  options = {length:50, stiffness:0.1, pointA:{x:200, y:20}, 
  bodyB:ball}
  c = Matter.Constraint.create(options) 
  World.add(world,c)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.show()
  ground1.show()
  ground2.show()
  ground3 .show()
  
  stroke('yellow')
  line(c.pointA.x,c.pointA.y,ball.position.x,ball.position.y)
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


