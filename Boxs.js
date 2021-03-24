class Box {
  constructor (x,y,width,height){
    var option ={
      restitution:0.8
      friction:1.0
      density:0.04
    }
this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;

Worldadd(world, this.body);
  }
  display(){
    var position=this.body.position;
    var angle= this.body.angle;
    push();
    translate(position.x,position.y);
    rotation (angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
  }
}
    