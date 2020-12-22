var i20Active,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  i20Active = createSprite(200,200,50,50);
  i20Active.shapeColor = "white"
  speed = (50,60)
  weight = (400,1500)
  i20Active.velocityX = speed;

wall = createSprite(1000,200,60,height/2);
wall.shapeColor = "white"

}

function draw() {
  background("black");
  
  if(wall.x-i20Active.x < (i20Active.width+wall.width)/2)
  
{
 i20Active.velocityX = 0;
  deformation = 0.5 * weight * speed* speed/22509;
 
if(deformation>180){
i20Active.shapeColor = "red";
}
if(deformation<180 && deformation>100);
{
  i20Active.shapeColor = "yellow";

}
 if(deformation<100)
 i20Active.shapeColor = "green";

 }
  drawSprites();
}