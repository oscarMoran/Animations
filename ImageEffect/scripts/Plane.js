class Plane{
    constructor(planeX, planeY, speed){
        this.planeXPos = planeX;
        this.planeYPos = planeY;
        this.speed = speed;
        
    }

    ShowPlane(){
        stroke(0);
        strokeWeight(1);
        line(this.planeXPos, this.planeYPos - 40, this.planeXPos + 15,this.planeYPos - 40);
        line(this.planeXPos + 3, this.planeYPos - 40, this.planeXPos + 3,this.planeYPos - 43);
        line(this.planeXPos + 15 - 2, this.planeYPos - 40,this.planeXPos + 15 - 10,this.planeYPos - 37);
        let planeLight = new StarShine(this.planeXPos + 15, this.planeYPos - 40,2,color(255,80,0));
        planeLight.Shine();
    }
    MovePlane(){
        this.planeXPos += this.speed;
    }

    IsDeleteIt(){
        return this.planeXPos > width;
    }
}