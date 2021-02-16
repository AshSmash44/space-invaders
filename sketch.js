var player,playerImg;
var enemyGroup;
var bulletGroup;
var enemy,bullet;

function preload(){
  playerImg = loadImage("images/player.png");
}

function setup() {
  createCanvas(300,400);
  player = createSprite(150,370,20,10);
  player.addImage(playerImg);
  player.scale = 0.05;
  enemyGroup = new Group();
  bulletGroup = new Group();
}

function draw() {
  background(0,0,0); 
  if(keyWentDown(LEFT_ARROW) && player.x >= 50){
    player.x = player.x - 25;
  }
  if(keyWentDown(RIGHT_ARROW) && player.x <= 250){
    player.x = player.x + 25;
  }
  if(keyWentDown(32)){
    spawnBullet();
  }
  if(frameCount % 20 === 0 && frameCount<2000){
    spawnEnemies();
  }
  if(bulletGroup.isTouching(enemyGroup)){
    enemyGroup.setLifetimeEach(0);
  }
  enemyGroup.setVelocityXEach(2);
  if(frameCount % 100 === 0){
    enemyGroup.setYEach(enemyGroup.y+50)
  }

  drawSprites();
}
function spawnEnemies(){
  enemy = createSprite(70,50,30,30);
  enemyGroup.add(enemy);
}
function spawnBullet(){
  bullet = createSprite(player.x,player.y,2,4);
  bullet.velocityY = -5;
  bulletGroup.add(bullet);
  bullet.shapeColor = "lime"
  bullet.lifetime = 300;
}