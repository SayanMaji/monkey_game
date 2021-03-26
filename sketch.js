
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(50,250,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.09
  
  ground=createSprite(200,300,600,20);
  ground.velocityX=-8;

  
 
  
  FoodGroup=new Group();
obstacleGroup=new Group();
  
  

  
}


function draw() {
  background("green");
  if(keyDown("space") && monkey.y>100){
    monkey.velocityY=-12;
      }
monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
    
  food();
  obstacles();
  
  if(FoodGroup.isTouching(monkey)){
     score=score+1;
    FoodGroup.destroyEach();
     }
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
     FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    text("GAME OVER",300,300);
     }
  text("SCORE :"+ score,100,200);
  if(ground.x<100){
    ground.x=ground.width/2;

  }
     drawSprites();
}
function food(){
   if (frameCount % 80 === 0){ 
   banana=createSprite(600,Math.round(random(120,200,10,40)))
 banana.velocityX = -(6 + score/100);
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.lifetime=200;
     FoodGroup.add(banana);
   }

}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(300,300,400,20);
  obstacle.velocityX = -(6 + score/100);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}



