import {inject} from 'aurelia-framework'
import {Session} from '../../services/session'

@inject(Session)
export class Main {
	constructor(session) {
		this.session = session
	}
  configureRouter(config, router) {
    config.map([
      { route: '', name: 'home', moduleId: 'views/home/index', title: 'Home', nav: true },
      { route: 'consult_patient_file', name: 'consult_patient_file', moduleId: 'views/consult_patient_file/index', title: 'Consult Patient File', nav: true, settings: {icon: 'assignment_ind'} },
      { route: 'register_staff_member', name: 'register_staff_member', moduleId: 'views/register_staff_member/index', title: 'Register Staff Member', nav: true },
      { route: 'register_patient', name: 'register_patient', moduleId: 'views/register_patient/index', title: 'Register Patient', nav: true }
    ])
    this.router = router
    console.log(router)
  }
}