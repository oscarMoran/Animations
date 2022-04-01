class ChristmasLights{
    constructor(_x, _size){
        this.baseX = _x;
        this.baseY = random(height);
        this.increaser = 0;
        this.speed = 0.5;
        this.size = _size;
    }
    AppearLight(){
        stroke(random(255),random(255),random(255));
        // stroke(240,0,random(222));
        line(this.baseX, this.baseY, this.baseX + this.increaser, this.baseY - this.increaser);
        line(this.baseX, this.baseY, this.baseX + this.increaser, this.baseY + this.increaser);
        line(this.baseX, this.baseY, this.baseX - this.increaser, this.baseY + this.increaser);
        line(this.baseX, this.baseY, this.baseX - this.increaser, this.baseY - this.increaser);
        
        line(this.baseX, this.baseY, this.baseX + this.increaser, this.baseY);
        line(this.baseX, this.baseY, this.baseX - this.increaser, this.baseY);
        line(this.baseX, this.baseY, this.baseX, this.baseY + this.increaser);
        line(this.baseX, this.baseY, this.baseX, this.baseY - this.increaser);
    }
    Bright() {
        this.increaser = this.increaser < this.size ? this.increaser + this.speed : this.increaser *-1;
        if(this.increaser == 0){
            this.baseX = random(width);
            this.baseY = random(height);
        }
    }

}