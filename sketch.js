var car
var wall
var num
var speed
var weight

function setup() {
  createCanvas(windowWidth,windowHeight);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  num =0



  wall=createSprite(1500,200,60,windowHeight/2)
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    num=0.5*weight*speed*speed
    num=num/22500
    console.log(num)
    if (num<100){
      wall.shapeColor="green"
    }
    if (num>100&&num<180){
      wall.shapeColor="yellow"
    }
    if (num>180){
      wall.shapeColor="red"
    }
  }else{
    car.velocityX=speed
  }
  drawSprites();
}