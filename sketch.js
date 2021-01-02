
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground, obstacleGrp;
var FoodGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80, 230, 10, 10);                          
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.12;
  
  ground = createSprite(400, 350, 1400, 30);
  ground.velocityX = -4;
  console.log(ground.x)
  obstacleGrp = createGroup();
  bananaGrp = createGroup();
}


function draw() {
background("skyBlue");
   if(keyDown("space")) {
      monkey.velocityY = -13; 
    }
  if (ground.x < 0){
      ground.x = ground.width/2 ;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
  
    if (monkey.isTouching(obstacleGrp)){
    ground.velocityX = 0;
    obstacleGrp.setVelocityXEach(0);
    bananaGrp.setVelocityXEach(0);
    obstacleGrp.setLifetimeEach(-1);
    bananaGrp.setLifetimeEach(-1);
    survivialTime = 0;
    }
    
  
  stroke("red");
  textSize(30);
  fill("yellow");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time"+ survivalTime, 100, 50);
  obstacles();
  bananas();
  drawSprites();                   
}
function bananas(){
  if (frameCount%80 === 0){
    banana = createSprite(620,120, 50, 50 );
    banana.addImage("banana", bananaImage);
    banana.velocityX =-(6);
    banana.scale = 0.1;          
    banana.lifetime = 100; 
    bananaGrp.add(banana);
  }
}
function obstacles(){
  if (frameCount%100 === 0){
    obstacle = createSprite(620, 315, 50, 50);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX =-(6);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
    obstacleGrp.add(obstacle);
  }
}