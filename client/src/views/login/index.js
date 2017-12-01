import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Session} from '../../services/session'

@inject(Session, Router)
export class Login {
  constructor(session, router) {
    this.session = session
    this.router = router
    this.username = ''
    this.password = ''
  }

  login() {
    this.session.login(this.username, this.password).then(() => {
      this.router.navigate('PMS')
    })
  }

  register() {
    this.router.navigate('register')
  }
}
