
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var dustbin1,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(100,320,25);
	dustbin1=new Dustbin(700,330,15,100);
	dustbin2=new Dustbin(800,380,200,15);
	dustbin3=new Dustbin(900,330,15,100);
	ground=new Ground(600,392.5,1200,15);
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120});
	}
}



