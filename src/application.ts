#!/usr/bin/env node

/**
 * Application (CLI) using the project library
 * 
 * THIS IS A "PoC" APPLICATION, HENCE WITHOUT ANY PURPOSE BUT DEMONSTRATION
 * 
 */
import { Car } from "./lib/library";
import chalk from "chalk";

const cliinfo = chalk.yellow(`
--------------------------------------------------
INFORMATION:
------------

CLI of the PoC "one-ts-for-all"

please visit
https://github.com/khatastroffik/one-ts-for-all 
for more info.

`) + chalk.blueBright(
`--------------------------------------------------
APPLICATION OUTPUT:
-------------------
`);

function randomSpeed(c: Car): number {
  return Math.floor(Math.random() * c.getStatus().maxSpeed);
}

/** 
 * MAIN function = Application entry point 
 */
export function main(): void {

  console.log(cliinfo);

  const cars: Array<Car> = [];

  // create some cars
  cars.push(new Car('Trabi', 95));
  cars.push(new Car('2 CV', 75));
  cars.push(new Car('Veron', 375));

  // drive the cars i.e. start & accelerate
  cars.forEach((c: Car) => c.startEngine());
  cars.forEach((c: Car) => c.accelerate(randomSpeed(c)));

  // get Speed of the cars
  cars.forEach((c: Car) => {
    let info = c.getStatus();
    console.log( chalk.blueBright(`Car "${info.name}" is driving at speed: ${info.speed}.`));
  });

}

/** 
 * START APPLICATION
 */
main();