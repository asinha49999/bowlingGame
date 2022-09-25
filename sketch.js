const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

function preload(){
bgimg = loadImage("bowling-lane2.png")
ballimg = loadImage("bowlingball.png")

}


function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	Engine.run(engine);
	ball = new Ball(250,470)
	pin1 = new Pins(1535,460,120)
	pin2 = new Pins(1585,440,120)
	pin3 = new Pins(1635,420,120)
	pin4 = new Pins(1685,400,80)
	pin5 = new Pins(1685,430,80)
	pin6 = new Pins(1685,460,80)
	pin7 = new Pins(1685,490,80)
	pin8 = new Pins(1685,520,80)
}


function draw() {
	// image(bgimg,windowWidth/2,windowHeight/2,windowWidth,windowHeight)
	background(bgimg);
	rectMode(CENTER);
	ball.display();
	pin1.display();
	pin2.display();
	pin3.display();
	pin4.display();
	pin5.display();
	pin6.display();
	pin7.display();
	pin8.display();

	




}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
