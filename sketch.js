
var monkey , monkey_running,monkeyrest;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground,groundImage;
var gameState="play";

 
var bGroup,oGroup;


function preload(){
  monkey_running =            loadAnimation("sprite_8.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png");
  monkeyrest=loadImage("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}

function setup() {
 createCanvas(400,400);
monkey=createSprite(100,345,20,20);
monkey.addAnimation("run",monkey_running);
monkey.scale=0.13;

ground=createSprite(200,390,400,10);
oGroup=new Group();  
bGroup=new Group();
  
  
  
}
function draw() {
background("white");
  
textSize(15);
text("SURVIVAL SCORE : "+score,120,30);
  
if(gameState==="play"){

  if(keyDown("space") && monkey.y>326){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY+0.5;
    monkey.collide(ground);
  
  var PK=Math.round(random(1,2));
     if(frameCount%80===0){
     if(PK===1){
     obstacles();
   }
     else {
     bananas();
       }
 } 
 if(monkey.isTouching(bGroup)){
   bGroup.destroyEach();
   score+=1;
 }
   monkey.debug=true;
   monkey.setCollider("rectangle",0,70,400,400);
 if(monkey.isTouching(oGroup)){
   bGroup.setVelocityXEach(0);
   oGroup.setVelocityXEach(0);
   bGroup.destroyEach();
   monkey.destroy();
   oGroup.destroyEach();
   gameState="end";
} 
}
  if(gameState==="end"){
    text("GAME IS OVER",150,200)
    monkey.collide(ground);
  }
 
  //console.log(monkey.y)
 drawSprites();

}

function obstacles(){
 
  obstacle=createSprite(300,355,20,20);
  obstacle.addImage(obstaceImage); 
  obstacle.scale=0.15;
  obstacle.velocityX=-(5+score/12); 
  obstacle.lifetime=-1;
  oGroup.add(obstacle);
  
  }
 
function bananas(){
  banana=createSprite(370,Math.round(random(180,230)),20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-(5+score/10);
  banana.lifetime=60;
  bGroup.add(banana);
  
  }
  




