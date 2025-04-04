import Vehicle from "/js/Vehicle.js";
import Vector from "/js/Vector.js";

const canvas = document.getElementById('gameCanvas');
if (!canvas) {
    throw new Error("Canvas element not found");
}
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const vehicles = [];
const vehicleCount = 100;
console.log("I loaded");
let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

for (let i = 0; i < vehicleCount; i++) {
    const vehicle = new Vehicle();
    const position = new Vector(Math.random() * width, Math.random() * height);
    vehicle.setPosition(position);

    let velocity = new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1);
    if (velocity.magnitude() === 0) {
        // Avoid zero-length vector; assign a default direction.
        velocity = new Vector(1, 0);
    }
    velocity = velocity.normalize().multiply(2);
    vehicle.setVelocity(velocity);

    vehicles.push(vehicle);
}
/* Gameloop */

function update() {
    ctx.clearRect(0, 0, width, height);
    for (let vehicle of vehicles) {
        vehicle.seek(new Vector(mouseX, mouseY));
        vehicle.update();
        vehicle.checkEdges();
        vehicle.render(ctx);
    }
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
    ctx.fill();
    requestAnimationFrame(update);
}
update();
