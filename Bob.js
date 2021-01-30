class Bob{

    constructor(x,y,radius){
        var options={
            isStastic:true,
            friction:0,
            density:1.2   
    
            };
    
           this.body=Bodies.circle(x,y,radius,options);
           this.radius = radius;
         
           World.add(world, this.body);
       
    }
    display(){

        ellipseMode(CENTER);
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}