export class Car {
    constructor(name, maxSpeed = 0) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.started = false;
        this.speed = 0;
        if (!maxSpeed || maxSpeed < 0) {
            throw new Error('The vehicle maximum speed must be a positive value');
        }
    }
    startEngine() {
        this.started = true;
    }
    stopEngine() {
        this.started = false;
    }
    accelerate(amount) {
        if (!this.started) {
            throw new Error('cannot accelerate until engine is started');
        }
        this.speed = Math.min(this.speed + Math.abs(amount), this.maxSpeed);
    }
    throttle(amount) {
        this.speed = Math.max(0, this.speed - Math.abs(amount));
    }
    getStatus() {
        return { name: this.name, maxSpeed: this.maxSpeed, engine: this.started ? 'started' : 'stopped', speed: this.speed };
    }
    getSpeed() {
        return this.speed;
    }
    turnLeft() {
        throw new Error('Left turn is not implemented');
    }
    turnRight() {
        throw new Error('Right turn is not implemented');
    }
}
