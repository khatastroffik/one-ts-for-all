import { Component, OnInit } from '@angular/core';
import { Car  } from "@khatastroffik/one-ts-for-all";

@Component({
  selector: 'app-car-pool',
  templateUrl: './car-pool.component.html',
  styleUrls: ['./car-pool.component.css']
})
export class CarPoolComponent implements OnInit {

  cars: Array<Car> = [];

  constructor() { 
    this.cars.push(new Car('Trabi', 95));
    this.cars.push(new Car('2 CV', 75));
    this.cars.push(new Car('Veron', 375));
    this.cars.forEach((car) => car.startEngine());
  }

  ngOnInit(): void {

  }

  randomSpeed(car: Car): number {
    return Math.floor( 1 + Math.random() * car.getStatus().maxSpeed * 0.25);
  }

  accelerate(): void{
    this.cars.forEach((car) => car.accelerate(this.randomSpeed(car)) );
  }

  throttle(): void{
    this.cars.forEach((car) => car.throttle(this.randomSpeed(car)) );
  }
}
