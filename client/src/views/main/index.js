import {inject} from 'aurelia-framework'
import {Session} from '../../services/session'

@inject(Session)
export class Main {
	constructor(session) {
    this.session = session
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
        route: 'consult_patient_file',
        name: 'consult_patient_file',
        moduleId: 'views/consult_patient_file/index',
        title: 'Consult Patient File',
        nav: true, 
        settings: {
          icon: 'assignment_ind'
        } 
      },
      { 
        route: 'visualize_division',
        name: 'visualize_division',
        moduleId: 'views/visualize_division/index',
        title: 'Visualize Division',
        nav: this.session.user.type == 'Charge Nurse' 
      },
      { 
        route: 'register_patient',
        name: 'register_patient',
        moduleId: 'views/register_patient/index',
        title: 'Register Patient',
        nav: this.session.user.type == 'Medical Staff'
      }
    ])
    this.router = router
  }
}