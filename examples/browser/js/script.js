/********************************************
 * WEB APPLICATION SCRIPT
 ********************************************/

export function randomSpeed(car) {
  return Math.floor( 1 + Math.random() * car.getStatus().maxSpeed * 0.25);
}

export function CreateElementWithContent(element, content) {
   var cell = document.createElement(element);
   cell.innerHTML = content;
   return cell;
}

console.log('[SCRIPT.JS] ', '"script.js" Web Application Module has been loaded');  
