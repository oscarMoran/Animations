class Planet {
    constructor(planetSize, color){
        this.originX = width / 2 ;
        this.originY = height / 2;
        this.r = planetSize *2;
        this.vx = random(-5,5);
        this.vy = random(5,-5);
        this.speedIncrease = random(0.51,0.2);
        this.color = color;
    }

    PlanetBody(){
        //noStroke();
        fill(this.color);
        ellipse(this.originX, this.originY, this.r);
    }
    IncreasePlanet(){
        this.r += this.speedIncrease;
    }
    Movement(){
        this.originX += this.vx;
        this.originY += this.vy;
    }
    PlanetDelete(){
        return this.originX >= width + this.r || this.originX < 0 || this.originY >= height + this.r || this.originY < 0;
    }
}