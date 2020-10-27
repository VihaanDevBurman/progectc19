var ball,ballImg;
var pP,pPImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg=loadImage("ball.png");
pPImg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
   ball=createSprite(390,200,10,70);
  ball.addImage(ballImg);
  pP=createSprite(10,200,10,70);
  pP.addImage(pPImg);
  ball.velocityX=9;
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
   edges = createEdgeSprites();
  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3])||(ball.isTouching(edges[1])) ){
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[1])
  }
  ball.bounceOff(pP);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 pP.y = World.mouseY;
  /* Prevent the paddle from going out of the edges */ 
  
  
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

