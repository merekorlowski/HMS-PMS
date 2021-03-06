import {Redirect} from 'aurelia-router'
import {inject} from 'aurelia-framework'
import {StaffService} from './services/staff'
import {Toaster} from './services/toaster'

@inject(StaffService, Toaster)
export class App {
  constructor(staffService, toaster) {
    this.staffService = staffService
    this.toaster = toaster
  }

  configureRouter(config, router) {
    config.title = 'HMS_PMS'

    const handleUnknownRoutes = (instruction) => {
      if (this.staffService.key) {
        return { route: 'PMS', name: 'main', moduleId: 'views/main/index' }
      } else {
        return { route: 'login', moduleId: 'views/login/index', title: 'Login' }
      }
    }

    config.mapUnknownRoutes(handleUnknownRoutes);
    //config.addPipelineStep('authorize', VerifySessionKey)
    config.map([
      { route: 'login', moduleId: 'views/login/index', title: 'Login' },
      { route: 'register', moduleId: 'views/register/index', title: 'Register' },
      { route: 'PMS', name: 'main', moduleId: 'views/main/index' }
		])

    this.router = router
  }

  attached() {
    this.current_route = this.router.currentInstruction.config.route
  }

  get route() {
    console.log(this.current_route)
    return this.current_route
  }
}

class VerifySessionKey {
  run(navigationInstruction, next) {
    if (this.staffService.key) {
      return next();
    } else {
      return next.cancel(new Redirect('login'))
    }
  }
}
