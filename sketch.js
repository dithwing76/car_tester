var bullet, speed,weight
var wall,thickness
var num


function setup() {
  createCanvas(windowWidth,windowHeight);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50, 200, 60, 20);
  bullet.shapeColor="white"
  num =0


  thickness=random(22,83)
  wall=createSprite(1500,200,thickness,windowHeight/2)
}

function draw() {
  background(0,0,0);     
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0
    num=0.5*weight*speed*speed 
    num=num/thickness*thickness*thickness
    console.log(num)
    if (num<10){
      wall.shapeColor="green"
    }
    if (num>100&&num<180){ 
      wall.shapeColor="yellow"
    }
    if (num>10){
      wall.shapeColor="red"
    }
  }else{
    bullet.velocityX=speed
  } 
  text(num,15,15)
  drawSprites();
}
