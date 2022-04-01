

class Meteorit {
    constructor(meteoritSize, speed, directionYvalue)
    {
        this.meteoritSize = meteoritSize;
        this.directionY = directionYvalue;
        this.originX = width;
        this.originY = height *.25;
        this.directionChanged = false;
        this.speed = speed;
    }

    MethStruct(){
        fill(10,222,10);
        ellipse(this.originX , this.originY, this.meteoritSize );
    }

    Move(){
        if(this.directionChanged){
            this.originX += this.speed;
            this.originY += this.directionY;
        }else{
            this.originX -= this.speed;
            this.originY += this.directionY;
        }
    }

    Changedirection(){
        if(!this.directionChanged){
            this.directionChanged = this.originX <= 20;
        }else{
            this.directionChanged = this.originX < width;
        }
    }

    Remove(){
        return this.originX > width + (width * 0.25);
    }
}