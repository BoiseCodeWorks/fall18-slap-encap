import Target from '../models/target.js'
//PRIVATE
//DATA

let target = new Target("Mr. Bill", 100)
//let target2 = new Target("Mr. Bill", 100)

export default class SlapService {
  constructor() {
    console.log("Making Slap Service")
  }
  slap() {
    target.health--
    return target.health
  }
  punch() {
    target.health -= 5
    return target.health
  }
}