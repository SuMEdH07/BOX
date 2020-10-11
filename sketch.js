const Engine = Matter.Engine
const World = Matter. World
const Bodies = Matter.Bodies

var engine, world, ground;
var box1,box2;
var ball;
var ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 box1 = new Box(200,100,50,40);
 box2 = new Box(220,80,40,30);
ground = new Ground(200,390,400,20);
}

function draw() {
  background("black");  
 Engine.update(engine);
 box1.display ();
 box2.display ();
 ground.display();
  
}