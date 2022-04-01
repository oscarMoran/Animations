var initialBase;
class Hill
{
    constructor(xStartPos, yStartPos, color){
        let v1, xV, yV;
        this.color = color;
        this.hillStructParams = [];
        for(let i = 1; i <= 5; i++){
            if(i == 1){
                xV = xStartPos;
                yV = yStartPos;
            }else if(i ===5){
                xV += random(40,45);
                yV = yStartPos;
            }else{
                xV += random(40,45);
                yV = yStartPos - random(35,70);
            }
            v1 = createVector(xV, yV);
            this.hillStructParams.push( {
                x : v1.x,
                y :v1.y
            });
        }
    }

    Appears(){
        fill(this.color);
        beginShape();
            for(let i = 0; i < this.hillStructParams.length; i++){
                let v = this.hillStructParams[i];
                vertex(v.x,v.y);
            }
        endShape();
    }
}