class StarShine{
    constructor(starPositionX,starPositionY, starSize,starColor){
        this.starPositionX = starPositionX;
        this.starPositionY = starPositionY;
        this.starSize = starSize;
        this.starColor = starColor;
        this.limit = 1;
    }

    Shine(){
        noStroke()
        fill(this.starColor);
        ellipse(this.starPositionX, this.starPositionY, this.starSize);
        this.reachedLimitSize = this.starSize > this.limit || this.starSize == 0;
        if(this.reachedLimitSize){
            this.starSize *= -1
        }
        this.starSize += 1;
    }

}