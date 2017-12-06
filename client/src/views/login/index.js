import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {StaffService} from '../../services/staff'

@inject(StaffService, Router)
export class Login {
  constructor(staffService, router) {
    this.staffService = staffService
    this.router = router
    this.staffID = ''//this.staffService.staff.staffID || ''
    this.password = ''//this.staffService.staff.password || ''
    this.invalidStaffID = false
    this.invalidPassword = false
  }

  login() {
    if (this.staffID === '') {
      this.invalidStaffname = true
    }

    if (this.password === '') {
      this.invalidPassword = true
    }

    if (!this.invalidStaffID && !this.invalidPassword) {
      this.staffService.login(this.staffID, this.password).then(() => {
        this.router.navigate('PMS')
      })
    }
  }

  register() {
    this.router.navigate('register')
  }

}
