class Dustbin 
  {
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }

        this.Dustbin=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.Dustbin);
        this.width=width;
        this.height=height;
        
    }

  display()
  {
      rectMode(CENTER);
      fill("blue");
      rect(this.Dustbin.position.x,this.Dustbin.position.y,this.width,this.height);

  }
}