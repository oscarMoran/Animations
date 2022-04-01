let increaser;
class Orbit {
    constructor(inc){
        this.orbitSize = 0;
        increaser = inc
    }

    OrbitAppear(){
        stroke(255,0,0);
        // stroke(255,random(10,250),random(180));
        noFill();
        ellipse(width /2, height /2, this.orbitSize);
    }

    IncreaseSize(){
        this.orbitSize += increaser < 0 ? this.orbitSize * increaser : increaser;
    }

    RemoveOrbit(){
        return this.orbitSize > width + 10 || this.orbitSize > height + 10;
    }
}