var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3,bp,box4,box5,box6,fakebox;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
    helicopterSpritevelocityX=3;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	bp=packageBody.x-10
	box1= Bodies.rectangle(bp,650,100,20,{isStatic:true});
	World.add(world,box1);
	box2= Bodies.rectangle(bp+bp/2,650,100,20,{isStatic:true});
	World.add(world,box2);
	box3= Bodies.rectangle(bp+bp,650,100,20,{isStatic:true});
	World.add(world,box3);
// This is a fake box to make the animation more relistic.
fakebox= Bodies.rectangle(400,635,100,30,{isStatic:true});
	World.add(world,fakebox);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

box4=createSprite(450,610,20,100);
box5=createSprite(390,650,130,20);
box6=createSprite(320,610,20,100);	 

box4.shapeColor="red"
box5.shapeColor="red"
box6.shapeColor="red"
	Engine.run(engine);
  console.log(helicopterSpritevelocityX);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
Matter.Body.setStatic(packageBody,false);
	
  }
}

