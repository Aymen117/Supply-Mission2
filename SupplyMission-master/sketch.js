var helicopterIMG, helicopterSprite, package,packageIMG;
var packageBody,ground
var rectangle,rectangle1,rectangle2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	rectangle1=createSprite(380,650,150,20)
	rectangle=createSprite(300,590,20,150);
	rectangle2=createSprite(450,590,20,150);
	rectangle2.shapeColor=("red");
	rectangle.shapeColor=("red");
	rectangle1.shapeColor=("red");
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
  
}
function keyPressed()
{
if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
	
  }
}




