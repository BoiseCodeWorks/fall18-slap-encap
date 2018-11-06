import SlapService from "./SlapService.js";

//Connect service
let slapService = new SlapService()

//data outside of the exported classes is private 
function drawHealth(health) {
  document.getElementById('health').innerHTML = health
}


export default class SlapController {
  constructor() {
    console.log('MAKING CONTROLLER')
  }
  slap() {
    let newHealth = slapService.slap()
    drawHealth(newHealth)
  }
  punch() {
    let newHealth = slapService.punch()
    drawHealth(newHealth)
  }
}