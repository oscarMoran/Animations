const density = 'Ñ@#W$9876543210?!abc;:+=-,._';
let rick;
let v;
let meteoritObj = [];
let totalMeteorits = 30;
let starPositionX;
let starPositionY; 
let startSize;
let stars = [];
let totalStars = 180;
let insects = [];
let totalInsects = 40;
let insectSpeed;
let insectSize;
let MoonXPos;
let MoonYPos;
let counter;
let hills = [];
let totalHills = 70;
let planes = [];
let totalPlanes = 3;
let planeSpeed;

let highWayLines =[
];
let highWayYvalue;

function preload(){
    rick = loadImage("rick.jpg");
}
function setup(){
    createCanvas(1024,800);
    insectSize = random(1,3); 
    insectSpeed = random(4,8);
    MoonXPos = width / 2;
    MoonYPos = height / 2;
    highWayYvalue = height * 0.65;
    CreateHill(color(0));
    CreateStars();
    CreateMeteorits(totalMeteorits);
    CreatePlanes(totalPlanes);
    
    InitHighwayLines(highWayYvalue);
}

function draw(){
    background(12,15,44);
    for(let s of stars){
        s.Shine();
    }
    Moon(120);
    Field();
    stroke(0);
    for(let pn = 0 ; pn < planes.length; pn ++){
        planes[pn].ShowPlane();
        planes[pn].MovePlane();
        if(planes[pn].IsDeleteIt()){
            planes.splice(pn,1);
            CreatePlanes(1);
        }
    }
    for(let i  = 0; i < insects.length; i ++){
        insects[i].Update();
        insects[i].Show();
        if(insects[i].IsDeleted()){
            insects.splice(i,1);
        }
    }
    HighWay();
}

function InitHighwayLines(initYValue){
    let add = 20;
    let base = width / 2;
    let firstDotLineValue = 0;
    let secondDotLineValue = 0;
    for(let n = 0; n < 5; n++){
        firstDotLineValue = n === 0 ? initYValue : firstDotLineValue + 60;
        secondDotLineValue = n === 0 ? initYValue + add : firstDotLineValue + add;
        highWayLines.push({ x1 : base, y1 : firstDotLineValue, x2: base, y2 : secondDotLineValue });
    }
}

function HighWay(){
    stroke(67,65,65);
    line(width /2 -15, highWayYvalue, width *0.25, height);
    line(width /2 + 15, highWayYvalue, width * 0.75, height);
    for(let ln = 0;  ln < highWayLines.length; ln++){
        let currentHwObj = highWayLines[ln];
        line(currentHwObj.x1, currentHwObj.y1, currentHwObj.x2, currentHwObj.y2);
    }
}

function CreatePlanes(totalPlanes){
    for(let p = 0; p < totalPlanes; p++){
        planeSpeed = random(1,3);
        planes.push(new Plane(random(0,-50),random(height/2),  planeSpeed));
    }
}

function Moon(size){
    fill(255,195,0);
    MoonYPos = MoonYPos > height * 0.15 ? MoonYPos - 0.05: MoonYPos;
    ellipse(MoonXPos, MoonYPos,size);
}

function Field(){
    fill(0);
    rect(0, height/2, width, height);
    stroke(11,50,108);
    for(let h = 0; h < hills.length; h ++){
        hills[h].Appears();
    }
}

function CreateHill(color){
    for(let h = 0; h < totalHills; h ++){
        xStartPos = random(-40,width);
        yStartPos = random(height/2, height*0.65);
        hills.push(new Hill(xStartPos,yStartPos,color));
    }
}

function CreateInsects(initialX, initialY, size, speed){
    for(let ins = 0; ins < totalInsects; ins ++){
        insects.push(new Insect(initialX,initialY,size,speed));
    }
}

function CreateMeteorits(totalMeteorits){
    for(let m = 0; m < totalMeteorits; m++){
        meteoritObj.push(new Meteorit(random(5,20), random(2,6),0.25));
    }
}
function CreateStars(){
    for(let s = 0 ; s < totalStars; s ++){
        starPositionX = random(width);
        starPositionY = random(height * .50);
        startSize = 1;
        stars.push(new StarShine(starPositionX,starPositionY, startSize, color(255)));
    }
}
function RandomVectors(){
    translate(width/2, height / 2);
    v = p5.Vector.random2D();
    v.mult(random(50,200));
    stroke(random(255),0,random(255));
    line(0,0,v.x,v.y);
}

function ThroughImage(wd, ht){
    for(let w = 0; w <= rick.width; w++){
        for(let h = 0; h <= rick.height; h++){
            const pixelIndex = (w + h * rick.width) * 4;
            const r = rick.pixels[pixelIndex + 0];
            const g = rick.pixels[pixelIndex + 1];
            const b = rick.pixels[pixelIndex + 2];
            noStroke();
            fill(r,g,b);
            square(w * wd, h * ht, wd);
        }
    }
}

function mouseWheel() {
    CreateInsects(mouseX, mouseY,insectSize,insectSpeed);
}

function radialGradient(sX,sY,sR,eX,eY,eR,colorS, colorE){
    let gradient = drawingContext.createRadialGradient(
        sX,sY,sR,eX,eY,eR
    );
    gradient.addColorStop(0,colorS);
    gradient.addColorStop(1,colorE);
    drawingContext.fillStyle = gradient;
}

function Meteorits(){
    for(let t = 0; t < meteoritObj.length; t++){
        meteoritObj[t].MethStruct();
        meteoritObj[t].Move();
        meteoritObj[t].Changedirection();

        if(meteoritObj[t].directionChanged){
            let theNewOne = meteoritObj[t];
            meteoritObj.splice(t,1);
            meteoritObj.push(theNewOne);
            // meteoritObj.splice(t, 0, theNewOne);
        }
    }
}