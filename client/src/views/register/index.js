import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {StaffMemberService} from '../../services/staff_member'
import {Session} from '../../services/session'
import {Toaster} from '../../services/toaster'
import {User} from '../../models/user'

@inject(Router, StaffMemberService, Session, Toaster)
export class Register {
    constructor(router, staffMemberService, session, toaster) {
        this.router = router
        this.staffMemberService = staffMemberService
        this.session = session
        this.toaster = toaster
        this.user = new User()
    }

    register() {
        if (this.user.isValid()) {
            //this.patientService.register(this.user).then(success => {
                this.toaster.add({
                    text: `Successfully registered user: ${this.user.userID}.`,
                    type: 'success'
                })
                this.session.user = {
                    userID: this.user.userID,
                    password: this.user.password,
                    role: this.user.role //temp
                }
                this.router.navigate('login')
            //}).catch(err => {
                // display er
            //})
        } else {
            //
        }
    }

}