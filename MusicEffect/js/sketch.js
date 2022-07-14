var song;
var slider;
var button;
var amp;
let trail;
let effectValue = 1;
let trails = [];
let stars = [];
let starsNumber = 450;


function setup(){
    createCanvas(1000,580);
    amp = new p5.Amplitude();
    slider = createSlider(0,1,0.5,0.01);
    song = loadSound('Ripple.mp3', Loaded );
    StarsLoad();
}

function Loaded()
{
    button = createButton("play");
    button.mousePressed(TogglePlaying);
}

function TogglePlaying()
{
    if(!song.isPlaying()){
        song.play();
        button.html("pause");
    }else{
        song.pause();
        button.html("play");
    }
}

function draw(){
    var baseX = width /2; let baseY = height /2;
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol,0,0.3,35,140);
    let randomColor = color(56,random(diam),random(diam));
    let currentXvalue = 0;
    song.setVolume(slider.value());

    stars.forEach(t => {
        t.Apear();
    });
    Saturn(baseX,baseY,diam);
    if(diam > 120){
        trails.push(new Chemtrail(width /2, height / 2));
    }
    let c =50;
    beginShape();
    trails.forEach((t, v) => {
        t.Update(diam);
        t.Show(diam,effectValue, randomColor);
        if(t.IsDeleteit()){
            trails.splice(t,1);
        }
        // currentXvalue = t.x;
        // var tones = map(currentXvalue,0,1,height,0);
        // vertex(c,tones);
        // c+= 1;
        // console.log(tones,currentXvalue);
    });
    endShape();
    console.log(trails);

}

function Saturn(baseX, baseY, diam){
    fill(0);
    stroke(255);
    ellipse(baseX, baseY , diam, diam);
    line((baseX - diam), baseY, (baseX + diam), baseY);
}

function StarsLoad(){
    let starColors = color(255,0,0);
    for(let s = 0; s < starsNumber; s++){
        let randomStarPositionX = random(width); 
        let randomStarPositionY = random(height); 
        stars.push(new Stars(randomStarPositionX, randomStarPositionY, random(0,1), starColors));
    }
}
function mousePressed  (){
    trails.push(new Chemtrail(width /2, height / 2));
}

function mouseWheel(){
    effectValue = effectValue > 0 ? effectValue -1 : effectValue +1;
}