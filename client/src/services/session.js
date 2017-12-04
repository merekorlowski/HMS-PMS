import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Router} from 'aurelia-router'

@inject(HttpClient, Router)
export class Session {
  constructor(http, router) {
    this.http = http
    this.router = router
    this.key = null
    this.user = {
      userID: 'morlo088',
      password: 'pass',
      role: 'Doctor'
    }
  }

  login(userID, password) {
    return this.http.fetch(`/session/login`, {
      userID: userID,
      password: password
    }).then(response => response.json()).then(user => {
      this.key = 'key'//response.key
      this.user = {userID: userID, password: password, role: 'Doctor'}//user
    })
  }

  logout(user) {
    this.key = null
    this.router.navigate('login')
  }

}
