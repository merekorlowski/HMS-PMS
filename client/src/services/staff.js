import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'
import {Router} from 'aurelia-router'

import {Toaster} from './toaster'
import {Staff} from '../models/staff'
import {config} from '../config'

@inject(Router, Toaster)
export class StaffService {
  constructor(router, toaster) {
    this.http = new HttpClient().configure(config => {
      config.withBaseUrl(config.baseUrl);
    })
		this.router = router
		this.toaster = toaster
		this.staffID = ''
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
		}).then(response => response.json())
  }

  register(staff) {
    return this.http.fetch('/register', {
      method: 'post',
      body: json(staff)
    }).then(response => response.json())
  }

  logout(staff) {
		this.key = null
		this.staff = null
    this.router.navigate('login')
  }

}
