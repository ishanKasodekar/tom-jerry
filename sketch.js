var bgImg;
var cat1,cat2,cat3,cat4;
var mouse,cat;
var mouse1,mouse2,mouse3,mouse4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,600);
    mouse.addAnimation("mouse is standing",mouse1);
    mouse.scale=0.15;
    cat = createSprite(870,600);
    cat.addAnimation("cat is sleeping",cat1);
    cat.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.x=300;
    cat.addAnimation("cat is standing",cat4);
    cat.changeAnimation("cat is standing")
    mouse.addAnimation("mouse is standing",mouse4);
    mouse.changeAnimation("mouse is standing")
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouse is teasing",mouse2);
    mouse.changeAnimation("mouse is teasing");
    mouse.frameDelay=25;
    cat.addAnimation("cat is running",cat2);
    cat.changeAnimation("cat is running");
    cat.velocityX=-5;
}
  //For moving and changing animation write code here


}
