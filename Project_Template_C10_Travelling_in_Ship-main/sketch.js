var sea 
var ship
function preload(){
ship_moving = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  //create ship
  ship = createSprite(50,350,30,30)
  ship.addAnimation("moving",ship_moving)
//create ground sprite
sea = createSprite(200,380,200,20)
sea.addImage("sea",groundImage)
}

function draw() {
  background("blue");
 //code to reset the background
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
 
}