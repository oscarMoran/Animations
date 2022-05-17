var song;
var slider;
var button;
var amp;


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
    let baseX = width /2; let baaseY = height /2;
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol,0,0.3,10,150);
    let co = color(56,random(diam),random(diam))
    fill(co);
    noStroke();
    ellipse(baseX, baaseY , diam, diam);
    
    stroke(255);
    line(baseX, baaseY,(baseX) - diam, baaseY);
    line(baseX, baaseY, (baseX) + diam, baaseY);

    song.setVolume(slider.value());
}