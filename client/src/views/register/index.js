import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {StaffService} from '../../services/staff'
import {Toaster} from '../../services/toaster'
import {Staff} from '../../models/staff'

@inject(Router, StaffService, Toaster)
export class Register {
    constructor(router, staffService, toaster) {
        this.router = router
        this.staffService = staffService
        this.toaster = toaster
        this.staff = new Staff()
    }

    register() {
        if (this.staff.isValid()) {
            this.staffService.register(this.staff).then(success => {
                this.toaster.add({
                    text: `Successfully registered. Your staff ID is: ${success.staffID}.`,
                    type: 'success'
								})
								this.staffID = success.staffID
                this.router.navigate('login')
            }).catch(err => {
                // display er
            })
        } else {
            
        }
    }

}
