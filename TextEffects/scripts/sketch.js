let font;
let blockWall;
let coffee;

function preload(){
    font = loadFont('assets/AlexBrush-regular.ttf');
    blockWall = loadImage('assets/blockWall.png');
    coffee = loadImage('assets/coffee.png');
}

function setup(){
    createCanvas(1024,750);
    colorMode(HSB, 360,100,100,100);
    //rectMode(CENTER);

    noFill();
    stroke(255);
    strokeWeight(3);

    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(128);

    imageMode(CENTER);
}
function draw(){
    background(0);
    image(blockWall, width/2,height /2);
    textNeon('Momos Page!',color(332,58,91,100));
}

function glow(glowColor,blurriness){
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowColor = glowColor;
}

function textNeon(textValue,glowColor){
    glow(glowColor,40);
    text(textValue, width/2,height /2);
    glow(glowColor,80);
    text(textValue, width/2,height /2);
    glow(glowColor,12);
    text(textValue, width/2,height /2);
    text(textValue, width/2,height /2);
}
function RectWithShadow(){
    noFill();
    stroke(255);
    strokeWeight(10);
    let offsetX = map(mouseX,0,width,20,-20);
    let offsetY = map(mouseY,0,height,20,-20);
    drawingContext.shadowOffsetX = offsetX;
    drawingContext.shadowOffsetY = offsetY;
    drawingContext.shadowBlur = 12;
    drawingContext.shadowColor = color(207,7,70);
    rect(width/2, height/2,300,300,30);
}