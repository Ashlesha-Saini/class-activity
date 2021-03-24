class  Ball {
    constructor (x,y,r,angle){
    //var ball;
    var option={
        density:1
    }
this.body=Bodies.circle(x,y,r,option,angle);
World.add(world,this.body)
    }


display(){
    fill("black");
    circleMode(ELLIPSE);


}
   
}