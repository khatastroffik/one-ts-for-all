/** 
 * Project library
 * 
 * THIS IS A "PoC" LIBRARY, HENCE WITHOUT ANY PURPOSE BUT DEMONSTRATION
 * 
 */

export type CarStatus = {
  name: string;
  speed: number;
  engine: 'started' | 'stopped';
  maxSpeed: number;
}

export class Car {
  private started: boolean = false;
  private speed: number = 0;

  /**
   * Creates an instance of a Car.
   *
   * @param {string} name name of the vehicule
   * @param {number} [maxSpeed=0] maximum speed of the vehicle
   * @memberof Car
   */
  constructor(protected name: string, protected maxSpeed: number = 0) {
    if (!maxSpeed || maxSpeed < 0) {
      throw new Error('The vehicle maximum speed must be a positive value');
    }
  }

  /**
   * Start the vehicle engine
   *
   * @memberof Car
   */
  startEngine(): void {
    this.started = true;
  }

  /**
   * Stop the vehicle engine.
   * 
   * Note:
   * The car is not loosing speed in this scneario. 
   * Though it won't accelerate again until the engine is re-started.
   *
   * @memberof Car
   */
  stopEngine(): void {
    this.started = false;
  }

  /**
   * Accelerate the vehicle - as long as the engine is started
   *
   * @param {number} amount
   * @memberof Car
   * @throws {Error} In case the engine is not started
   */
  accelerate(amount: number): void {
    // accept positive and negative amount values to decrease the speed.
    if (!this.started) {
      throw new Error('cannot accelerate until engine is started');
    }
    this.speed = Math.min(this.speed + Math.abs(amount), this.maxSpeed);
  }
  /**
   * Throtle vehicle speed
   *
   * this function accepts positive and negative amount values to decrease the speed ( -> abs)
   * 
   * @param {number} amount
   * @memberof Car
   */
  throttle(amount: number): void {
    this.speed = Math.max(0, this.speed - Math.abs(amount));
  }

  /**
   * retrieve an object describing the state of the vehicle.
   *
   * @returns {CarStatus}
   * @memberof Car
   */
  getStatus(): CarStatus {
    return { name: this.name, maxSpeed: this.maxSpeed, engine: this.started ? 'started' : 'stopped', speed: this.speed };
  }

  /**
   * Retrieve the current speed of the vehicle.
   *
   * @returns {number}
   * @memberof Car
   */
  getSpeed(): number {
    return this.speed;
  }

  /**
   * Change vehicle direction -> turn left
   *
   * @memberof Car
   */
  turnLeft(): void {
    // not implemented
    throw new Error('Left turn is not implemented');
  }

  /**
   * Change vehicle direction -> turn right
   *
   * @memberof Car
   */
  turnRight(): void {
    // not implemented
    throw new Error('Right turn is not implemented');
  }

}

/**
 * DEBUGGING INFO - TO BE REMOVED IN PRODUCTION
 */
// console.log('library is loaded');