class SpaceTrash{
    constructor(y,dir,color,speed, firstTime){
        this.direction = dir.toString().charAt(0);
        this.x = firstTime ? random(width) : parseInt(this.direction) == 1 ? random(-200,-100) : width + random(100,200);
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.rockShapes = [];
        for(let i = 0 ; i < 4; i++){
            let vertexX =  i == 1 || i == 2 ? random(-2,6) : i == 3 ? random(-2,8) : 0;
            let vertexY =  i == 1 || i == 2 ? random(-2,8) : i == 3 ? random(-2,-6) : 0;
            var rock = createVector(this.x + vertexX, this.y + vertexY);
            this.rockShapes.push({
                x : rock.x,
                y : rock.y
            })
        }
    }

    CreateTrash(){
        fill(this.color);
        beginShape();
        for(var t = 0; t < this.rockShapes.length; t++){
            this.rockShapes[t].x = parseInt(this.direction) == 1 ? this.rockShapes[t].x + this.speed : this.rockShapes[t].x - this.speed;
            vertex(this.rockShapes[t].x,this.rockShapes[t].y);
        }
        endShape();
    }
    DeleteTrash(){
        for(let t = 0; t < this.rockShapes.length; t++){
            if(parseInt(this.direction) == 1){
                if(this.rockShapes[t].x > width){
                    return true;
                }
            }else{
                if(this.rockShapes[t].x < 0){
                    return true;
                }
            }
        }
        return false;
    }
}