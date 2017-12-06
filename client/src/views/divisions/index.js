import {inject} from 'aurelia-framework'
import {StaffService} from '../../services/staff'
import {DivisionService} from '../../services/division'

@inject(StaffService, DivisionService)
export class DivisionFile {
    constructor(staffService, divisionService) {
        this.staffService = staffService
        this.divisionService = divisionService
        this.division = this.divisionService.tempDivision
    }

    getDivision() {

    }

    displayDivisionInfoForm() {
        this.isDivisionInfo = true
    }

    hideDivisionInfoForm() {
        this.isDivisionInfo = false
    }

}
