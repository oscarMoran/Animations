var xHill;

class Trees {
    constructor(baseTree, heightVal, spacing){
        this.base = baseTree;
        this.treeHeight = heightVal;
        this.arrayVertex = [];
        let localSpacing = 0;
        this.vx = random(-50,50);
        for(let i = 1; i <= 3; i++){
            localSpacing = i == 1 ? spacing * 1: localSpacing + 35;
            this.arrayVertex.push( localSpacing);
        }
    }

    TreeCreator(wind, color){
        stroke(0);
        beginShape();
        for(let i = 0; i < this.arrayVertex.length; i++){
            fill(color);
            xHill = this.arrayVertex[i];
            if(i !== 1){
                 vertex(xHill,this.base);
            }
            else{
                vertex(xHill + wind, this.base - this.treeHeight);
                fill(102,61,6);
                rect(xHill-5, this.base,10, 20);
            }
        }
        endShape(CLOSE);

    }
}