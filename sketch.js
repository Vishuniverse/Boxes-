var box
var boom
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30)
  boom = createSprite(400,200,40,40)
  boom.velocity.x=-2
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if(boom.isTouching(box)){
    box.remove;
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.position.x=box.position.x-2
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   box.position.y=box.position.y-2
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.position.y=box.position.y+2
  }
 if (keyIsDown(RIGHT_ARROW)){
  background("red")
  box.position.x=box.position.x+2
 }
if(keyIsDown(RIGHT_ARROW)&&keyIsDown(LEFT_ARROW)){
  background("white")
  box.rotation=box.rotation+2
}
if(keyIsDown(UP_ARROW)&&keyIsDown(DOWN_ARROW)){
  boom.position.x=box.position.x
  boom.position.x=box.position.x-2
}
if(keyIsDown(LEFT_ARROW)&&keyIsDown(UP_ARROW)){
  boom.rotation=boom.rotation-2
}
if(boom.position.x==1){
  boom.position.x=400;
}
  drawSprites();
}

