import SlapController from './components/SlapController.js'


class App {
  constructor() {
    this.controllers = {
      slapController: new SlapController()
    }
  }
}






//ATTACHES APP TO THE DOM
window.app = new App()