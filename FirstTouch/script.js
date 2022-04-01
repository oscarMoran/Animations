let lightObjList =[];
let Asteroids = [];
let asteroid;
let particle;
let startPintOfWidth = 120;
let itHasPreviosly = false;
let particleList = [];
let trees = [];
let treesNumber = 60;
let stars = [];
let starsNumber = 150;
let star;
let randomStarPositionX;
let randomStarPositionY;
function setup() {
    createCanvas(1000, 600);
    /*
    for(let i = 1; i <= 200; i++)
    {
        var drop = new ChristmasLights(random(width), 22);
        lightObjList.push(drop);
    }
    */
    for(let a = 1; a <= 2; a++)
    {
        var ast = new Asteroid();
        Asteroids.push(ast);
    }
    //setInterval(()=>console.log("oscar"),3000);
    
    InitializeObjs();
    this.pos = createVector(width /2, height -50);
    console.log(pos);
  }
  
  function InitializeObjs() {
    //Stars
    for(let s = 0; s < starsNumber; s++){
      randomStarPositionX = random(width); 
      randomStarPositionY = random(0, height /2 * .75); 
      stars.push(new Stars(randomStarPositionX, randomStarPositionY, random(0,2)))
    }
    //Trees
    for(let e = 0; e < treesNumber; e++){
      trees.push(new Trees(height /2 +70, random(40,180), random(width)));
    }
  }
function draw() {
    background(0);
    NightLandscape();
  }

  function NightLandscape(){
    let c = color(7,66,37);
    noStroke();
    for(let s = 0 ; s < stars.length; s ++){
      stars[s].Apear();
    }
    fill(255,237,random(200,212))
    ellipse(width/2,height /2 *.8, 60);
    fill(19,16,80);
    rect(0,height / 2 +10, width, 65);
    for(let f = 0; f < trees.length; f++){
      trees[f].TreeCreator(random(-1,0),c);
    }
  }
  function drawGrass(y, l){
    x = random(width);
    line(x, y, x - random(-2,2), l);
  }
  function mousePressed() {
    stars = [], trees = [];
    InitializeObjs();
  }

  function ColorBalloms(){
    //for(let j = 0; j < 5; j++){
    let p = new Particle();
    particleList.push(p);
    //}
    for(let e = particleList.length -1; e >= 0; e--){
      particleList[e].update();
      particleList[e].show();
      if(particleList[e].deleteParticle()){
        particleList.splice(e,1);
      }
    }

  }
  function AsteroidFunc(){
    var ast = new Asteroid();
    Asteroids.push(ast);
    for(let i = 0; i < Asteroids.length; i++)
    {
      Asteroids[i].AsteroidStruct();
    }
  }
  function ChistmasLightsFunc(){
    for(let i = 0; i < lightObjList.length; i++)
    {
      lightObjList[i].AppearLight();
      lightObjList[i].Bright();
    }
  }