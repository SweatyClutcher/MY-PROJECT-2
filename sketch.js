const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
  bgImage = loadImage("images/background.png")
}

function setup() {
  createCanvas(displayWidth - 80, displayHeight - 100);
  engine = Engine.create();
  world = engine.world;
  ship = new SpaceShip(300, 400, 200, 200);
}

function draw() {
  background(bgImage);  
  Engine.update(engine);
  ship.display();
}