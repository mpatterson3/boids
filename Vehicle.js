import Vector from "./Vector.js";

class Vehicle {
    constructor(){
        this.position = new Vector();
        this.velocity = new Vector();
        this.acceleration = new Vector();
        this.maxSpeed = 5;
        this.maxForce = 0.1;
    }
    
    setPosition(value) {
        this.position = value;
    }
    
    setVelocity(value) {
        this.velocity = value;
    }
    
    setAcceleration(value) {
        this.acceleration = value;
    }
    
    setMaxSpeed(value) {
        this.maxSpeed = value;
    }
    
    setMaxForce(value) {
        this.maxForce = value;
    }
    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.multiply(0);
    }
    checkEdges() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        if(this.position.x > width) this.position.x = 0;
        else if(this.position.x < 0) this.position.x = width;
        if(this.position.y > height) this.position.y = 0;
        else if(this.position.y < 0) this.position.y = height;
    }
    render(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.velocity.heading());
        ctx.beginPath();
        ctx.moveTo(25, 0);
        ctx.lineTo(-25, -15);
        ctx.lineTo(-25, 15);
        ctx.fillStyle = '#999';
        ctx.fill();
        ctx.restore();
    }
}

export default Vehicle;