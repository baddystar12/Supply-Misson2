var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10, package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10, ground_options);
	groundSprite.shapeColor=color(255);

	box1 = createSprite(400, 660, 200, 20);
	box1.shapeColor = "red";
	box2 = createSprite(290, 620, 20, 100);
	box2.shapeColor = "red";
	box3 = createSprite(510, 620, 20, 100);
	box3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true
	}
  var package_options={
	isStatic: true
  }
 
	packageBody = Bodies.circle(width/2 , 200 , 5, package_options );
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
 	World.add(world, ground);


	Engine.run(engine);
	

}


function draw() {
	background("turquoise");
	Engine.update(engine);
	rectMode(CENTER);
    packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	if(keyDown("LEFT")){
		helicopterSprite.x = helicopterSprite.x - 10;
		translation = {x:-10, y:0};
		Matter.Body.translate(packageBody, translation);
	}
	if(keyDown("RIGHT")){
		helicopterSprite.x = helicopterSprite.x+10;
		translation = {x:+10, y:0};
		Matter.Body.translate(packageBody, translation);
	}
    drawSprites();
	if(keyDown("DOWN")){
	Matter.Body.setStatic(packageBody, false);
} 
}
