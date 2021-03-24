class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
display(){
    var position= this.body.position;
    fill("brown");
    rectMode(CENTER);
    rect(position.x,positiony,this.width,this.height); 

}
}

