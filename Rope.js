class Rope{
  constructor(bodyA,pointB){
    var options={
      bodyA:bodyA,
      pointB:pointB,
      length:250,
      stiffness:0.008
    }
    this.pointB=pointB;
    this.body=Constraint.create(options);
    World.add(world,this.body)
  }
  display(){
    var pointB=this.pointB;
    var pointA=this.body.bodyA.position;
push();
strokeWeight(3);
stroke("black");
 line(pointB.x,pointB.y,pointA.x,pointA.y);
pop ();
  }
  
}