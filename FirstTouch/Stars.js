class Stars {
    constructor(XPosition, YPosition, starSize, starColor){
        this.starXPosition = XPosition;
        this.starYPosition = YPosition;
        this.starSize = starSize;
        this.colorStar = starColor;
    }

    Apear(){
        fill(this.colorStar);
        circle(this.starXPosition,this.starYPosition, this.starSize * 2);
    }
    Shine(){

    }
}