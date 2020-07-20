var fixedRect,movingRect;
var o1,o2,o3

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;
 movingRect = createSprite(300,300,40,40);
 movingRect.shapeColor="green";
 movingRect.debug=true;
 o1 = createSprite(200,200,60,60);
 o1.shapeColor="orange";
 o2 = createSprite (100,100,20,20);
 o2.shapeColor="orange";
 o3 = createSprite(500,200,10,10);
 o3.shapeColor = "orange";
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  
   if(isTouching(movingRect,o3)){
     
    o3.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    o3.shapeColor="orange";
    movingRect.shapeColor="green";
  }
  drawSprites();
}




