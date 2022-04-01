var planetNumber = 25;
let planetSize = 0;
let planets = [];
function setup(){
    createCanvas(1000, 750);
    FillPlanets();
}

function draw(){
    background(0);
    stroke(0);
    noFill();
    planetFunc();
    /*if(planets.length < 5){
        console.log("repeat");
        FillPlanets();
    }*/
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
    FillPlanets();
}
function mousePressed() {
    planets = [];
}

function drawCircle(x,y,d){
    ellipse(x,y,d);
    if(d > 2){
        drawCircle(x + d * 0.5, y, d * 0.5);
        //drawCircle(x - d * 0.5, y, d * 0.5);
    }
}
