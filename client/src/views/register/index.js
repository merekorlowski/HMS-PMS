import {inject} from 'aurelia-framework'
import {ValidationControllerFactory} from 'aurelia-validation'
import {StaffMemberService} from '../../services/staff_member'
import {User} from '../../models/user'

@inject(StaffMemberService, ValidationControllerFactory)
export class Register {
    constructor(staffMemberService, controller) {
        this.staffMemberService = staffMemberService
        this.controller = controller.createForCurrentScope()
        this.user = new User()
    }

    register() {
        this.controller.validate().then(result => {
            if (result.valid) {
                this.patientService.register(this.user).then(success => {
                    // display message
                }).catch(err => {
                    // display er
                })
            } else {
                //
            }
        })
    }

}