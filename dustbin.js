class dustbin {
    constructor(x,y){
        var options = {isStatic : true}
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options);
        this.leftBody = Bodies.rectangle(this.x - 100,this.y - 50,this.wallThickness, this.dustbinHeight,options);
        this.rightBody = Bodies.rectangle(this.x + 100,this.y - 50,this.wallThickness, this.dustbinHeight,options);
        Matter.Body.setAngle(this.leftBody , this.angle);
        Matter.Body.setAngle(this.rightBody ,-1* this.angle);
        World.add(world, this.bottomBody)
        World.add(world, this.leftBody)
        World.add(world, this.rightBody)
    }
    display(){
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        var bottomPos = this.bottomBody.position;
        push()
        translate(leftPos.x , leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(4);
        fill(255,0,0);
        rotate(this.angle)
        rect(0,0,this.wallThickness , this.dustbinHeight);
        pop()

        push()
        translate(rightPos.x , rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(4);
        fill(255,0,0);
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness , this.dustbinHeight);
        pop()

        push()
        translate(bottomPos.x , bottomPos.y);
        rectMode(CENTER);
        //angleMode(RADIANS);
        strokeWeight(4);
        fill(255,0,0);
        rect(0,0,this.dustbinWidth, this.wallThickness );
        pop()
    }
}