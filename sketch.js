
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var boyimg;

function preload()
{
	//boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);
boy = new Boy(200,100,20,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Boy.display();
  drawSprites();
 
}



