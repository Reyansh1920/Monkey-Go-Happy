var ball,img,paddle;
function preload() {
 ballimage=loadImage("ball.png");
 paddleimage=loadImage("paddle.png"); 
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(50,200,10,10);
   ball.addImage(ballimage);
   paddle=createSprite(200,200,20,50);
   paddle.addImage(paddleimage);  
   ball.velocityX=5;
   
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(paddle);
  ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
   ball.bounceOff(edges[1]);
   ball.bounceOff(edges[0]);
  
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20; 
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y=paddle.y+20;  
  }
  drawSprites();
  
}

function randomVelocity()
{
}

