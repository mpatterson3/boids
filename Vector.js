// Vector.js
// A simple vector module for physics simulation

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Returns a new vector that is an exact copy of this one
    copy() {
        return new Vector(this.x, this.y);
    }
    
    // Returns the heading (angle in radians) of the vector
    heading() {
        return Math.atan2(this.y, this.x);
    }
    
    // Adds another vector to this vector (in place)
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    
    // Subtracts another vector from this vector (in place)
    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }
    
    // Multiplies this vector by a scalar (in place)
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    
    // Divides this vector by a scalar (in place)
    divide(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        return this;
    }
    
    // Returns the magnitude (length) of the vector
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    // Normalizes the vector (in place) to have a magnitude of 1
    normalize() {
        const m = this.magnitude();
        if (m !== 0) {
            this.divide(m);
        }
        return this;
    }
    
    // Static method to add two vectors and return a new vector
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    
    // Static method to subtract v2 from v1 and return a new vector
    static subtract(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    // Limits the magnitude of the vector to max (in place)
    limit(max) {
        const m = this.magnitude();
        if (m > max) {
            this.normalize();
            this.multiply(max);
        }
        return this;
    }
    
    // Returns the dot product of this vector and another vector
    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }
    
    // Static method to compute the dot product of two vectors
    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
}
export default Vector;