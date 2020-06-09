/********************************************
 * NODE.JS APPLICATION SCRIPT
 ********************************************/

// The path is set explicitly to the sub directory containing the CJS version of the library
const one4all = require('@khatastroffik/one-ts-for-all/lib/cjs/library');

const nodeAppInfo = `
--------------------------------------------------
INFORMATION:
------------

Node.js Application example for the PoC "one-ts-for-all"

please visit
https://github.com/khatastroffik/one-ts-for-all 
for more info.

--------------------------------------------------
APPLICATION OUTPUT:
-------------------
`;


function randomSpeed(car) {
  return Math.floor( 1 + Math.random() * car.getStatus().maxSpeed * 0.25);
}

function main() {
  console.log(nodeAppInfo);
  var cars = []
  cars.push(new one4all.Car('Trabi', 95));
  cars.push(new one4all.Car('2 CV', 75));
  cars.push(new one4all.Car('Veron', 375));
  cars.forEach((c) => c.startEngine());
  cars.forEach((c) => c.accelerate(randomSpeed(c)));
  cars.forEach((c) => {
    var info = c.getStatus();
    console.log(`Car "${info.name}" is driving at speed: ${info.speed}.`);
  });
}

main();