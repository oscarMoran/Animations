class Particle {
    constructor(){
        this.x = width /2;
        this.y = height/2;
        this.size = random(3,14);
        this.vx = random(-5,5);
        this.vy = random(3,-3);
        this.alpha = 255;
        this.color = random(240);
        this.color2 = random(255);
        this.color3 = random(255);
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -=5;
    }
    show(){
        noStroke();
        fill(this.color,this.color2,this.color3);
        ellipse(this.x,this.y,this.size);
    }
    
    deleteParticle(){
        return this.y > height || this.y < 0;
    }
}