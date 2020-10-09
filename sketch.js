function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,100,50,80)
  movingRect = createSprite(70,300,50,30)

  fixedRect.shapeColor = "yellow"
  movingRect.shapeColor = "yellow"
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
movingRect.shapeColor = "pink"
fixedRect.shapeColor = "pink"
  }
  else {
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor = "yellow"
  }
  drawSprites();
}