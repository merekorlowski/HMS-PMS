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
      username: 'Merek Orlowski',
      role: 'Medical Staff'
    }
  }

  login(username, password) {
    return this.http.fetch(`/session/login`, {
      username: username,
      password: password
    }).then(response => response.json()).then(data => {
      this.key = 'key'//response.key
      this.user = {
        username: username,
        password: password
      }
    })
  }

  logout(user) {
    this.key = null
    this.router.navigate('login')
  }

}
