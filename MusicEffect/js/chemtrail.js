class Chemtrail {
    constructor(x, y){
        this.x =x;
        this.y =y;
        this.historyTrail = [];
        
    }

    Update(movement){
        console.log();
        this.x += random(- movement,movement);
        this.y += random(- movement,movement);
        let vector = createVector(this.x, this.y);
        this.historyTrail.push(vector);
        if(this.historyTrail.length > 10){
            this.historyTrail.splice(0,1);
        }
    }

    Show(movement, effect, randomColor){
        noStroke();
        fill(randomColor);
        ellipse(this.x,this.y,movement/2,movement/2);
        this.ParticleEffect(effect);
    }

    ParticleEffect(effectNumber){
        this.color = color(random(255),random(255),255);
        switch(effectNumber){
            case 1:
                    noFill();
                    stroke(this.color)
                    beginShape();
                    for(let i = 0; i < this.historyTrail.length ; i++){
                        var pos = this.historyTrail[i];
                        vertex(pos.x,pos.y);
                    }
                    endShape();
                break;
                default :
                    beginShape();
                    for(let i = 0; i < this.historyTrail.length ; i++){
                        fill(this.color)
                        var pos = this.historyTrail[i];
                        vertex(pos.x,pos.y);
                    }
                    endShape();
                break;
        }
    }

    IsDeleteit(){
        return this.x < -100 || this.y < - 100 || this.x > (width +100) || this.y > (height + 100)
    }
}