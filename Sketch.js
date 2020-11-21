var bananaImage, obstacleImage, obstacleGroup, backgRound, ground, player_running, player;
var banana;

var score = 0;
var s = 2;

var bananaGroup;

var PLAY = 1;
var END = 0;
var gameState
function preload(){
 backImage = loadImage("jungle.jpg");
  
 player_running = loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" ,"Monkey_05.png" ,"Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  backgRound = createSprite(200,200,800,20);
  backgRound.addImage(backImage);
  backgRound.velocityX = -3;
  backgRound.x = backgRound.width /2;
  
  ground = createSprite(370,400,800,20);
  ground.visible = false;
  
  player = createSprite(200,200,20,20);
  player.addAnimation("no",player_running);
}

function draw() {
  background(220);

  if(backgRound < 0){
   backgRound.x = backgRound.width /2;
  }

  if(bananaGroup.isTouching(player)){
    score = score + 2;
    bananaGroup.destroyEach();
  }

  if(obstacleGoup.isTouching(player)){
   player.scale = 0.2;
   console.log("You could've just jumped");
   console.log("END!"); 
  }

  food();
  obstacles();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 500, 50);

  camera.position.x = s + 0.5;
  drawSprites();
}
  function food(){
  if(World.frameCount % 80 === 0){
    banana = createSprite(200,randomNumber(120,200),20,20);
    banana.setAnimation("Banana");
    banana.scale = 0.05;
   
    //banana.velocityX = -3;
  
    banana.lifetime = 120;
    
    bananaGroup.add(banana);
  }
}
  
function obstacles(){
  if(World.frameCount % 300 === 0){
    var obstacle = createSprite(200,320,20,20);
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.15;
  }
}