import {inject} from 'aurelia-framework'
import {StaffMemberService} from '../../services/staff_member'
import {User} from '../../models/user'

@inject(StaffMemberService)
export class RegisterStaffMember {
    constructor(staffMemberService) {
        this.staffMemberService = staffMemberService
        this.user = new User()
    }

    register() {
        if (this.user.validate()) {
            this.staffMemberService.register(this.user).then(success => {
                //
            }).catch(err => {
                //
            })
        }
    }

}