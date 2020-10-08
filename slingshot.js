class Slingshot{
    constructor(a,b){
        var options = {
            bodyA: a,
            bodyB: b,
            length: 100,
            stiffness: 0.2
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }

    visible(){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
    }
}