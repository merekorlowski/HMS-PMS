import {inject} from 'aurelia-framework'
import {Session} from '../../services/session'
import {DivisionService} from '../../services/division'

@inject(Session, DivisionService)
export class DivisionFile {
    constructor(session, DivisionService) {
        this.session = session
        this.divisionService = DivisionService
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