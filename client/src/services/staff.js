import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'
import {Router} from 'aurelia-router'

import {Staff} from '../models/staff'
import {config} from '../config'

@inject(Router)
export class StaffService {
  constructor(router) {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl(config.baseUrl);
    })
    this.router = router
    this.key = null
    this.staff = null
  }

  login(staffID, password) {
    return this.http.fetch('/login', {
      method: 'post',
      body: json({
        staffID: staffID,
        password: password
      })
		})
		.then(response => response.json()).then(staff => {
      this.key = 'key'//response.key
      this.staff = new Staff(staff)
    })
  }

  register(staff) {
    return this.http.fetch('/register', {
      method: 'post',
      body: json(staff)
    }).then(response => response.json()).then(staff => {
      this.staff = new Staff(staff)
    })
  }

  logout(staff) {
    this.key = null
    this.router.navigate('login')
  }

}
