var iss, iss_img;
var space_bg;
var spaceCraft;
var spaceCraft1_img;   
var spaceCraft2_img;
var spaceCraft3_img;
var spaceCraft4_img;
var docking;
var hasDocked = false;

function preload()
{
  iss_img = loadImage("assets/iss.png");
  space_bg = loadImage("assets/spacebg.jpg");
  spaceCraft1_img = loadAnimation("assets/spacecraft1.png");
  spaceCraft2_img = loadAnimation("assets/spacecraft2.png");
  spaceCraft3_img = loadAnimation("assets/spacecraft3.png");
  spaceCraft4_img = loadAnimation("assets/spacecraft4.png");
}

function setup() 
{
  createCanvas(1000,600);
  spaceCraft = createSprite(100,540,50,50);
  spaceCraft.addAnimation("spacecraft",spaceCraft1_img);
  spaceCraft.scale = 0.27;

  iss = createSprite(400,230,50,50);
  iss.addImage(iss_img);
  iss.scale = 0.9;

  docking = createSprite(360,270,60,60);
  docking.visible = false;
}

function draw() 
{
  background(space_bg);  
  drawSprites();

  if(!hasDocked)
  {
    if(keyDown(UP_ARROW))
    {
      spaceCraft.addAnimation("spacecraft", spaceCraft2_img);
      spaceCraft.y -= 5;
    }
  
    if(keyDown(DOWN_ARROW))
    {
      spaceCraft.addAnimation("spacecraft", spaceCraft1_img);
      spaceCraft.y += 5;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      spaceCraft.addAnimation("spacecraft", spaceCraft4_img);
      spaceCraft.x -= 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      spaceCraft.addAnimation("spacecraft", spaceCraft3_img);
      spaceCraft.x += 5;
    }
  
    if(spaceCraft.collide(docking))
    {
      hasDocked = true;
    }
  }
  else
  {
    spaceCraft.x = 350;
    spaceCraft.y = 320;

    spaceCraft.addAnimation("spacecraft", spaceCraft1_img);

    textSize(40);
    fill("white");
    text("Docking Successful!", 380,550);
  }
}