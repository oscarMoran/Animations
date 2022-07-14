var planetNumber = 25;
let planetSize = 0;
let planets = [];
let stars = [];
let starsNumber = 1150;
let planetFeature;
let theSun;
let xBaseValue, yBaseValue;
let randomStarPositionX;
let randomStarPositionY;
let jsonData = [];
let trashObjects = [];
let trashNumber = 160;
let music;
var slider;
var amp;


function preload(){
    music = loadSound('../MusicEffect/Paralelo.mp3',playMusic);
}
function playMusic(){
    music.play();
}
function setup(){
    amp = new p5.Amplitude();
    createCanvas(1000, 750);
    xBaseValue = width/2;
    yBaseValue = height/2;
    //FillPlanets();
    let co = color(211,178,random(6,26));
    theSun = new SpaceObject(xBaseValue,0,yBaseValue,0,380,co);
    GetJson();
    AssignPlanetFeatures();
    InitializeStars();
    InitializeTrash(true);
}

function draw(){
    background(0);
    stroke(0);
    noFill();

    var vol = amp.getLevel();
    var diam = map(vol,0,0.3,35,100);

    for(let s = 0 ; s < stars.length; s ++){
        stars[s].Apear();
    }

    theSun.Appear("sun",diam);
    for(let p = 0; p < planets.length; p ++){
        planets[p].Appear(planets[p]);
        planets[p].Move();
        if(planets[p].Delete()){
            planets.splice(p,1);
        }
    }
    if(planets.length == 0){
        AssignPlanetFeatures();
    }
    Trash();
}

function AssignPlanetFeatures(){
    jsonData.forEach(j => {
        let colorPlanet = color(j.colors.R, j.colors.G, j.colors.B);
        planets.push(new SpaceObject(-300, j.positionX, height/2, j.positionY, j.size, colorPlanet, j.name));
    });
}

async function GetJson(){
    jsonData = await PlanetsFeatures();
}

function FillPlanets(){
    for(let p = 0; p < planetNumber; p++){
        let color = (random(255),random(255),random(255));
        planets.push(new Planet(planetSize, color));
    }
}

function planetFunc() {
    for(let p = 0; p < planets.length; p++){
        planets[p].PlanetBody();
        planets[p].IncreasePlanet();
        planets[p].Movement();
        if(planets[p].PlanetDelete()){
            planets.splice(p,1);
        }
    }
}

function mouseWheel(event){
    //FillPlanets();
}

function drawCircle(x,y,d){
    ellipse(x,y,d);
    if(d > 2){
        drawCircle(x + d * 0.5, y, d * 0.5);
        //drawCircle(x - d * 0.5, y, d * 0.5);
    }
}

async function PlanetsFeatures(){
    let spaceValue = 0;
    return await fetch("Scripts/planetFeatures.json")
    .then(resp => resp.json())
    .then(json => {
        json.forEach(e => {
            spaceValue += (e.size / 2) + 40;
            e.colors.R = 0;
            e.colors.G = 0;
            e.colors.B = 0;
            e.positionX = spaceValue;
        });
        return json;
    });
}


function InitializeStars() {
    let starColors = color(random(200),145,255);
    for(let s = 0; s < starsNumber; s++){
      randomStarPositionX = random(width); 
      randomStarPositionY = random(0, height ); 
      stars.push(new Stars(randomStarPositionX, randomStarPositionY, random(-1,2), starColors))
    }
  }

  function InitializeTrash(ft){
    let colrs = color(72,51,51);
    let colorFlag = true;
    for(let g =0; g< trashNumber; g++){
        colrs = colorFlag ? color(0,15,15) : color(123,117,116);

        colorFlag = !colorFlag;
        trashObjects.push(new SpaceTrash(random(height),random(1,3),colrs,random(.5,3),ft));
    }
  }

  function Trash(){
    for(let h =0; h< trashObjects.length; h++){
        trashObjects[h].CreateTrash();
        if(trashObjects[h].DeleteTrash()){
            trashObjects.splice(h,1);
        }
    }
    if(trashObjects.length <= trashNumber/2){
        console.log(trashObjects.length);
        InitializeTrash(false);
    }

    
  }