import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {StaffService} from '../../services/staff'
import {Toaster} from '../../services/toaster'
import {Staff} from '../../models/staff'

@inject(StaffService, Router, Toaster)
export class Login {
  constructor(staffService, router, toaster) {
    this.staffService = staffService
		this.router = router
		this.toaster = toaster
    this.staffID = this.staffService.staffID
    this.password = ''
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
      this.staffService.login(this.staffID, this.password).then(staff => {
				if (staff.err) {
					this.toaster.add({
						type: 'error',
						text: staff.err
					})
				} else {
					this.staffService.staff = new Staff(staff)
					this.router.navigate('PMS')
				}
			}).catch(err => {
				this.toaster.add({
					type: 'error',
					text: err.data
				})
			})
    }
  }

  register() {
    this.router.navigate('register')
  }

}
