import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'

@inject(HttpClient)
export class StaffMemberService {
    constructor(http) {
        this.http = http
    }

    register(staffMember) {
        return this.http.fetch('/staff_member', staffMember).then(response => response.json());
    }

}