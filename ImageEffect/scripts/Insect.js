class Insect {
    constructor(x, y, size, speed){
        this.x = x;
        this.y = y;
        this.size = size
        this.speed = speed;
    }

    Update(){
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
    }
    Show(){
        noStroke();
        fill(10,222,10);
        ellipse(this.x, this.y, this.size);
    }
    IsDeleted(){
        return this.x < 0 || this.x > width + 10 || this.y < 0 || this.y > height; 
    }
}