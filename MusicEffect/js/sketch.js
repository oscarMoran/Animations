var song;
var slider;
var button;
var amp;
let trail;
let effectValue = 1;
let trails = [];


function setup(){
    createCanvas(1000,580);
    amp = new p5.Amplitude();
    slider = createSlider(0,1,0.5,0.01);
    song = loadSound('Ripple.mp3', Loaded );
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
    let randomColor = color(56,random(diam),random(diam))
    song.setVolume(slider.value());

    Saturn(baseX,baseY,diam);
    if(diam > 120){
        trails.push(new Chemtrail(width /2, height / 2));
    }
    trails.forEach(t => {
        t.Update(diam);
        t.Show(diam,effectValue, randomColor);
        if(t.IsDeleteit()){
            trails.splice(t,1);
        }
    });
    
}

function Saturn(baseX, baseY, diam){
    noFill();
    stroke(255);
    ellipse(baseX, baseY , diam, diam);
    line((baseX - diam), baseY, (baseX + diam), baseY);
}
function mousePressed  (){
    trails.push(new Chemtrail(width /2, height / 2));
}

function mouseWheel(){
    effectValue = effectValue > 0 ? effectValue -1 : effectValue +1;
}