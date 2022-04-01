class Stars {
    constructor(XPosition, YPosition, starSize){
        this.starXPosition = XPosition;
        this.starYPosition = YPosition;
        this.starSize = starSize;
    }

    Apear(){
        fill(random(200),145,random(255));
        circle(this.starXPosition,this.starYPosition, this.starSize * 2);
    }
    Shine(){

    }
}