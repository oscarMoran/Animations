class Asteroid
{
    constructor(){
        this.originX =width /2;
        this.originY =height/2;
        this.directionVal = 1;
        this.lineBase = 0;
        this.speed = 5;
        this.speedBase = 5;
        this.randomNumber  = Math.floor(Math.random() * (9 - 1)) + 1;
    }
    AsteroidStruct(){
        stroke(255);
        this.directionVal += this.speed;
        switch(this.randomNumber){
            case 1: //  direction '/'
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                
                line(this.originX - this.lineBase, this.originY + this.lineBase, this.originX - this.directionVal, this.originY + this.directionVal);
            break;
            case 2:
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX + this.lineBase, this.originY + this.lineBase, this.originX + this.directionVal, this.originY + this.directionVal);
            break;
            case 3:
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX + this.lineBase, this.originY - this.lineBase, this.originX + this.directionVal, this.originY - this.directionVal);
            break;
            case 4:
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX - this.lineBase, this.originY - this.lineBase, this.originX - this.directionVal, this.originY - this.directionVal);
            break;
            case 5:
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX, this.originY - this.lineBase, this.originX, this.originY - this.directionVal);
            break;
            case 6:
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX, this.originY + this.lineBase, this.originX, this.originY + this.directionVal);
            break;
            case 7:
                this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX - this.lineBase, this.originY, this.originX - this.directionVal, this.originY);
            break;
            case 8:this.lineBase = this.directionVal > 20 ? this.lineBase + this.speedBase : 0;
                line(this.originX + this.lineBase, this.originY, this.originX + this.directionVal, this.originY);
            break;
            default:
                console.log(`option no correct ${randomValue}`);
        }
        console.log(this.originX);
    }

    Delete(){
        
        return (this.originY - this.directionVal < 0) || (this.originY - this.directionVal > width || this.originY - this.directionVal > height)
    }

}