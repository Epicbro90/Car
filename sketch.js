var car, wall;
var speed, weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1700)
  wall = createSprite(1500,200,60,height/2)
  car = createSprite(50,200,50,50)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x < (wall.width+car.width)/2){
    damage = 0.5*weight*speed*speed/22500
    car.velocityX = 0;
    car.x = wall.x - 30;
    text(Math.round(damage),1300,200);
    if(damage < 100){
      car.shapeColor = color(0,255,0);
    } else if(damage > 180){
      car.shapeColor = color(255,0,0)
    } else {
      car.shapeColor = color(230,230,0);
    }
  }
}