
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var ball;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options = {
    isStatic:true   
	}
    var ball_options = {
	restitution:0.7,
	frictionAir:0.1,
	friction:0.02

	}

    plane = Bodies.rectangle(600,580,1200,2,plane_options)
	World.add(world,plane);

	Engine.run(engine);
  
	ball = Bodies.circle(220,10,10,ball_options)
	World.add(world.ball);

	fill("brown");
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  rect(plane.position.x,plane.position.y,1200);
  ellipse(ball.position.x,ball.position.y,30);
  Engine.update(engine);
  drawSprites();
 
}



