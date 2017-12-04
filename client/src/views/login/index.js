import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {Session} from '../../services/session'

@inject(Session, Router)
export class Login {
  constructor(session, router) {
    this.session = session
    this.router = router
    this.userID = this.session.user.userID || ''
    this.password = this.session.user.password || ''
    this.invalidUserID = false
    this.invalidPassword = false
  }

  login() {
    if (this.userID === '') {
      this.invalidUsername = true
    }

    if (this.password === '') {
      this.invalidPassword = true
    }

    if (!this.invalidUserID && !this.invalidPassword) {
      //this.session.login(this.userID, this.password).then(() => {
        this.router.navigate('PMS')
      //})
    }
  }

  register() {
    this.router.navigate('register')
  }

  deactivate() {
    this.session.newUserRegistered = false
  }

}
