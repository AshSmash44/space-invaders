var player,playerHP;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9

function setup() {
  createCanvas(300,400);
  player = createSprite(150,370,20,10);
}

function draw() {
  background(0,0,0); 
  if(keyWentDown(LEFT_ARROW) && player.x >= 100){
    player.x = player.x - 50;
  }
  if(keyWentDown(RIGHT_ARROW) && player.x <= 200){
    player.x = player.x + 50;
  }
  drawSprites();
}