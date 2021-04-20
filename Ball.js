class Ball{
  constructor(x,y,angle){
    var options={
density:1,
frictionAir:0.005

    }
     this.body= Bodies.circle(x,y,80,options);
    this.r=80;
    World.add(world,this.body);
  }
   display(){
     var angle=this.body.angle;
var posX=this.body.position.x;
var posY=this.body.position.y;
push();
translate(posX,posY);
fill("black");

rotate(angle);
ellipseMode(RADIUS);
ellipse(0,0,80,80);
pop();

  }
}

