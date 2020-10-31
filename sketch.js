var bgImg,bg;
var ball,ballImg;
var startB,startImg;
var obstacleImgl;
var score=0;
var screen1=1;
var screen2=2;
var screen3=3;
var gameScreen="screen1";
var obstacleGroup;
function preload(){
  bgImg=loadImage("bg2.png");
  ballImg=loadImage("soccer ball.png");
  startImg=loadImage("start.png");
  obstacleImg=loadImage("bamboo.png");
}

function setup() {
  createCanvas(500,400);
  bg=createSprite(250,100,500,20);
  bg.addImage(bgImg);
  bg.scale=0.6;
  
  ball=createSprite(40,200,20,20);
  ball.addImage(ballImg);
  ball.scale=0.05;
  
  startB=createSprite(230,330,20,20);
  startB.addImage(startImg);
  startB.scale=0.07;
  
  obstaclesGroup=createGroup();
 
}

function draw() {
  background("lightblue");
  if(gameScreen==="screen1"){
    background(bgImg)
  ball.visible=false;
    bg.visible=false;
    fill("yellow");
    stroke("blue");
    stroke("white");
  textSize(50); 
  text("SAVE THE BALL ",68,150);
     fill("blue");
  textSize(18); 
  text("instructions: 1)the ball can be controled through the mouse",30,190)
    fill("blue");
  textSize(18); 
  text("2)to start the game press the start button",134,220);
     fill("blue");
  textSize(18); 
  text("3)don't let the ball touch the bamboo sticks",134,250)
    fill("white");
    stroke("green");
    stroke("white");
  textSize(18); 
  text("START",200,300)
    if(mousePressedOver(startB)){
      gameScreen="screen2";
    }
  }
  if(gameScreen==="screen2"){
    background("lightgreen");
    bg.visible=true;
    ball.visible=true;
    startB.visible=false;
    ball.x=World.mouseX;
    ball.y=World.mouseY;
    spawnObstacles();
    if(frameCount%20===0){
      score=score+1;
    }
    text("SCORE: "+score,400,30)
  }
  if(obstaclesGroup.isTouching(ball)){
    gameScreen="screen3";
    obstaclesGroup.destroyEach();
    ball.destroy();
  }
  if(gameScreen==="screen3"){
    background("black");
    textSize(80);
    fill("white");
    text("GAME OVER",10,180);
    textSize(30)
    fill("white");
    text("The ball touched the bamboo!",55,230);
    bg.visible=false;
    ball.visible=true;
    
  }
  
  drawSprites();
 
}

function spawnObstacles(){
  if(frameCount%20===0){
  var obstacle=createSprite(500,300,20,20);
  obstacle.addImage(obstacleImg);
    obstacle.scale=2.2;
    obstacle.velocityX=-5;
    obstaclesGroup.add(obstacle);
    ball.depth=obstacle.depth;
    ball.depth=ball.depth+1;
    obstacle.debug=false;
    obstacle.setCollider("rectangle",0,0,10,200)
    var rand=Math.round(random(1,2));
    if(rand===1){
      obstacle.y=300;
      
    }
    if(rand===2){
        obstacle.y=100;
      }
    
    //console.log(obstacle.y)
  }
}