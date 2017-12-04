import {inject} from 'aurelia-framework'
import {Session} from '../../services/session'

@inject(Session)
export class Main {
	constructor(session) {
    this.session = session
    this.menuIsVisible = false
	}
  configureRouter(config, router) {
    config.map([
      { 
        route: '',
        name: 'home',
        moduleId: 'views/home/index',
        title: 'Home',
        nav: true
      },
      {
        route: 'patients',
        name: 'patients',
        moduleId: 'views/patients/index',
        title: 'Patients',
        nav: true
      },
      {
        route: 'patient/:id',
        name: 'patient',
        moduleId: 'views/patient/index'
      },
      {
        route: 'divisions',
        name: 'divisions',
        moduleId: 'views/divisions/index',
        title: 'Divisions',
        nav: true
      },
      {
        route: 'division/:id',
        name: 'division',
        moduleId: 'views/division/index'
      }
    ])
    this.router = router
  }

  toggleMenu() {
    this.menuIsVisible = !this.menuIsVisible
  }

}