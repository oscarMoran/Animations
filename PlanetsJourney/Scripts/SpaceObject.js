let h = 0;
let run = false;
class SpaceObject {
    constructor(baseX,xPos, baseY, yPos, size, color,name){
        this.Size = size;
        this.Xpos = xPos;
        this.Ypos = yPos;
        this.Color = color;
        this.BaseX = baseX;
        this.BaseY = baseY;
        this.planetName = name;
    }

    Appear(elem, soundEffect){
        fill(elem == "sun" ? color(211,random(110,135),15) : this.Color);
        noStroke();
        ellipse(this.BaseX + this.Xpos, this.BaseY + this.Ypos, elem == "sun" ? this.Size + soundEffect : this.Size)
        if(this.planetName == "Saturn"){
            stroke(0);
            line(this.BaseX + this.Xpos - 25, this.BaseY, this.BaseX + this.Xpos + 25, this.BaseY)
        }
    }

    Move(){
        this.Xpos += 2;
        if(!run){
            h++;
            this.BaseY += 1;
            run = h == 7;
        }else{
            h--;
            this.BaseY -= 1;
            run = h > 0;
        }
    }

    Delete(){
        return this.BaseX + this.Xpos > width + 300;
    }
}